'use client'

import {
  parse,
  format,
  startOfDay,
  addYears,
  isAfter,
  isBefore,
  startOfMonth,
  addDays
} from 'date-fns'

import { CalendarDays, Info, X } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {  useEffect, useMemo, useState } from 'react'
import { DatePicker } from '@/app/types/datePiker'
import { useFormError } from '@/hooks/useFormError'
import { InputMask } from './InputMask'
import { cn } from '@/lib/utils'

export function CalendarDemo({
  getDateStart,
  getDateEnd,
  label,
  totalDays,
  dateType,
  startDate,
  endDate,
  valueDay,
}: DatePicker) {
 const today = useMemo(() => startOfDay(new Date()), [])
 const limitDate = useMemo(() => addYears(today, 1), [today])
 
  
  
  const defaultFormattedDate = useMemo(() => format(today, 'dd/MM/yyyy'), [today]);
  // `start` depende de `startDate` e `today`, então recalcule se `startDate` mudar.
  const effectiveStartDate = useMemo(() => startOfDay(startDate ?? today), [startDate, today]);


  const [open, setOpen] = useState(false)
  const [valueInput, setValueInput] = useState<string>(defaultFormattedDate)

  const { formInfo, handleError } = useFormError()

  const [calendarState, setCalendarState] = useState({
    selectedDate: undefined as Date | undefined,
    selectedMonth: undefined as Date | undefined,
  })

  useEffect(() => {
     
    if (dateType === 'start') return

    if (isBefore(effectiveStartDate, today)) {
      handleError(true, 'A data escolhida deve ser igual ou posterior à data atual.')
      return
    }

    setValueInput(format(effectiveStartDate, 'dd/MM/yyyy'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate,valueDay])

  useEffect(() => {
    addDaysToEndDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueDay])

  useEffect(() => {
    updateSelectedMonth()
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput])

   useEffect(() => {
   updateDateStart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate])

  const updateDateStart =()=>{
    if(dateType=='end'){
   
      const parsed = parse(valueInput, 'dd/MM/yyyy', new Date())
      if (isBefore(parsed,effectiveStartDate)) {
       setValueInput(format(effectiveStartDate, 'dd/MM/yyyy'))
    }
    }
  }
 
 
 
 
  const addDaysToEndDate = () => {
    const start = startDate ?? today
    const days = valueDay ?? 0

    if (dateType === 'end' && days >= 0) {
      const date = addDays(start, days)
      setValueInput(format(date, 'dd/MM/yyyy'))
    }
  }

  function updateSelectedMonth() {
    const date = startOfDay(parse(valueInput, 'dd/MM/yyyy', new Date()))
    if (isNaN(date.getTime())) return

    if (isBefore(date, today)) {
      handleError(true, 'A data escolhida deve ser igual ou posterior à data atual.')
      return
    }

    if (isAfter(date, limitDate)) {
      handleError(true, 'A data escolhida deve ser inferior a um ano.')
      return
    }

    handleError(false)
    setCalendarState({
      selectedDate: date,
      selectedMonth: startOfMonth(date),
    })
  }

  const handleInputChange = (value?:string) => {
   if(!value) return
    
    if (value.length < 8) return

    const parsed = parse(value, 'ddMMyyyy', new Date())
    if (isNaN(parsed.getTime())) {
      handleError(true, 'Data inválida será apagada')
      return
    }

   setValueInput(format(parsed, 'dd/MM/yyyy'))
  }

  useEffect(() => {
    const date = calendarState.selectedDate ?? new Date()
    getDateStart?.(date)
    getDateEnd?.(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarState.selectedDate])

  useEffect(() => {
    
    if (totalDays === undefined) return
    if (totalDays >= 0) return handleError(false)

    let message = ''
    if (dateType === 'start') {
      message = 'A data inicial deve ser menor que a final'
    } else if (dateType === 'end') {
      
      message = 'A data final deve ser maior que a inicial'
    }

    handleError(true, message)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateType])

  function formatSelectedDate(selected: Date | undefined) {
    if (!selected) return

    const formatted = format(selected, 'dd/MM/yyyy')
    setValueInput(formatted)
    setCalendarState(prev => ({
      ...prev,
      selectedDate: selected,
    }))
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor="date" className="px-1 p-1 uppercase">
        {label}
      </Label>

      <Popover open={open}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex justify-between items-center font-normal",
              "border-2 border-solid border-gray-300",
              "hover:ring-[3px] hover:ring-black hover:border-transparent",
              "focus:outline-none rounded-sm"
            )}
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

            <InputMask
              aria-label="Campo de data"
              placeholder="DD/MM/YYYY"
              className="border-0 h-[43px] ring-0 p-0 px-0 hover:ring-0"
              mask="00/00/0000"
              message={formInfo.message}
              hasError={formInfo.hasError}
              onAccept={handleInputChange}
             // onChange={handleInputChange}
              value={valueInput}
            />

            <div
              onClick={() => {
                setCalendarState({
                  selectedDate: undefined,
                  selectedMonth: undefined,
                })

                if (dateType === 'end') {
                  setValueInput(format(effectiveStartDate, 'dd/MM/yyyy'))
                }

                if (dateType === 'start') {
                  setValueInput(defaultFormattedDate)
                }

                handleError(false)
              }}
              className="cursor-pointer"
            >
              <X />
            </div>
          </div>
        </PopoverTrigger>

        {formInfo.hasError && (
          <div className="py-1">
            <span className="flex items-center gap-1 text-[0.8rem] text-red-500">
              <Info className="w-5 h-5 text-red-600" color="red" />
              {formInfo.message}
            </span>
          </div>
        )}

        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={calendarState.selectedDate ?? today}
            month={calendarState.selectedMonth ?? today}
            onMonthChange={month =>
              setCalendarState(prev => ({ ...prev, selectedMonth: month }))
            }
            endMonth={limitDate}
            captionLayout="dropdown"
            disabled={{ before: today, after: limitDate }}
            onSelect={date => {
              if (getDateStart) getDateStart(date ?? new Date())
              if (getDateEnd) getDateEnd(date ?? new Date())

              formatSelectedDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
