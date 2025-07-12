'use client'

import { 
  parse, 
  format, 
  startOfDay, 
  addYears, 
  isAfter, 
  isBefore, 
  startOfMonth 
} from 'date-fns'

import { CalendarDays, Info, X } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useEffect, useState } from 'react'
import { DatePicker } from '@/app/types/datePiker'

export function CalendarDemo({
  getDateStart,
  getDateEnd,
  label,
  totalDays,
  dateType

}:DatePicker) {
  const onToday = startOfDay(new Date())
  const limitDate = addYears(onToday, 1)

  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [inputClear, setInputClear] = useState<boolean>(false)
  const [month, setSelectedMonth] = useState<Date | undefined>(undefined)
  const [valueInput, setValueInput] = useState<string>(onToday.toLocaleDateString('pt-BR'))
  const [formInfo, setFormInfo] = useState({
    hasError: false,
    message: '',
  })

 useEffect(() => {
  updateSelectedMonth()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput])
  useEffect(() => {
    if(getDateStart){
        getDateStart(selectedDate?? new Date())
        }
    if(getDateEnd){
        getDateEnd(selectedDate?? new Date())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput,selectedDate])

   useEffect(() => {
  // Se não há diferença de dias, não precisa validar nada
  if (totalDays === undefined) return;

  if(totalDays>=0) setFormInfo(prev => ({ ...prev, hasError: false }))
  // Se a diferença for negativa, as datas estão fora de ordem
  if (totalDays < 0) {
    let message = '';

    if (dateType === 'start') {
      message = 'A data inicial deve ser menor que a final';
    } else if (dateType === 'end') {
      message = 'A data final deve ser maior que a inicial';
    }

    setFormInfo({
      hasError: true,
      message,
    });
  }
}, [totalDays, dateType]);

  
  
  function formatSelectedDate(selected: Date | undefined) {
    if (!selected) return
    const formatted = format(selected, 'dd/MM/yyyy')
    setValueInput(formatted)
    setSelectedDate(selected)
   
  }

  function updateSelectedMonth() {
    const date = startOfDay(parse(valueInput, 'dd/MM/yyyy', new Date()))
    if (isNaN(date.getTime())) return

    if (isBefore(date, onToday)) {
      setFormInfo({ hasError: true, message: 'A data escolhida deve ser igual ou posterior à data atual.' })
      return
    }

    if (isAfter(date, limitDate)) {
      setFormInfo({ hasError: true, message: 'A data escolhida deve ser inferior a um ano.' })
      return
    }

    setFormInfo(prev => ({ ...prev, hasError: false }))
    setSelectedDate(date)
    setSelectedMonth(startOfMonth(date))
   
  }

  const handleClearDate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key
    if (key === 'Backspace') {
      setInputClear(true)
      return
    }

    const isDigit = /^\d$/.test(key)
    if (!isDigit) {
      e.preventDefault()
      return
    }

    setInputClear(false)
  }

  /* Mantém a máscara DD/MM/YYYY em tempo real */
const handleInputChange = (value: string) => {
  if (inputClear){ 
    setFormInfo(prev => ({ ...prev, hasError: false }))
    return setValueInput(value)
  }
    
  if (value.length > 10) return
  // 1. Remove qualquer /
  const digits = value.replace(/\//g, '');
  
  // 3. Quebra em partes
  let day:string   = digits.slice(0, 2);
  let month:string = digits.slice(2, 4);
  const year  = digits.slice(4, 8);

  // 4. Define separadores conforme o tamanho
  const sep1 = month ? '/' : '';
  const sep2 = year  ? '/' : '';
 
 if (day.length > 0 && Number(day.charAt(0)) > 3) {
  day = day.padStart(2, "0");
}

if (month.length > 0 && Number(month.charAt(0)) > 1) {
  month = month.padStart(2, "0");
}
  
  if (Number(day)>31) {
      setFormInfo({
        hasError: true,
        message: 'O dia máximo permitido é 31.',
      })
      return
    }

    if (Number(month)>12) {
      setFormInfo({
        hasError: true,
        message: 'O mês máximo permitido é 12.',
      })
      return
    }
   // 5. Junta tudo
  const formatted = `${day}${sep1}${month}${sep2}${year}`;
  setFormInfo(prev => ({ ...prev, hasError: false }))
  setValueInput(formatted);
};


  return (
    <div className="flex flex-col gap-0 w-full">
      <Label htmlFor="date" className="px-1 p-1">
        {label}
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={`
              flex
              justify-between
              items-center
              font-normal
              input
              ${formInfo.hasError ? 'border-red-500 ring-0' : ''}
              h-[43px]
            `}
          >
            <div
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open)
                updateSelectedMonth()
              }}
            >
              <CalendarDays />
            </div>

            <input
              placeholder="DD/MM/YYYY"
              className="border-0 px-2 outline-0 h-full w-full box-border"
              type="text"
              onChange={ev => {
               
                handleInputChange(ev.target.value)
              }}
              onKeyDown={handleClearDate}
              value={valueInput}
            />

            <div
              onClick={() => {
                setSelectedDate(undefined)
                setValueInput('')
                setSelectedMonth(undefined)
                setFormInfo(prev => ({ ...prev, hasError: false }))
              }}
              className="cursor-pointer"
            >
              <X />
            </div>
          </div>
        </PopoverTrigger>

        <div className="py-1">
          {formInfo.hasError && (
            <span className="flex items-center gap-1 text-[0.8rem] text-red-500">
              <Info className="w-5 h-5 text-red-600" color="red" />
              {formInfo.message}
            </span>
          )}
        </div>

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate ?? onToday}
            month={month ?? onToday}
            onMonthChange={setSelectedMonth}
            endMonth={limitDate}
            captionLayout="dropdown"
            disabled={{ before: onToday, after: limitDate }}
            onSelect={date => {
               if(getDateStart){
                getDateStart(date?? new Date())
               }
                if(getDateEnd){
                getDateEnd(date?? new Date())
               }
     
              formatSelectedDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
