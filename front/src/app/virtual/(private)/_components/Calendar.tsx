
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
import { useEffect, useState } from 'react'
import { DatePicker } from '@/app/types/datePiker'
import { useFormError } from '@/hooks/useFormError'




export function CalendarDemo({
  getDateStart,
  getDateEnd,
  label,
  totalDays,
  dateType,
  startDate,
  valueDay
}: DatePicker) {
  const onToday = startOfDay(new Date());
  const limitDate = addYears(onToday, 1);

  const [open, setOpen] = useState(false);
  const [inputClear, setInputClear] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>(onToday.toLocaleDateString('pt-BR'));
  const { formInfo, handleError } = useFormError();
  
 const [calendarState, setCalendarState] = useState({
    selectedDate: undefined as Date | undefined,
    selectedMonth: undefined as Date | undefined,
  });


  const addDaysToEndDate = () => {
  const start = startDate ?? onToday;

  if (dateType === 'end') {
    const date = addDays(start, valueDay ?? 0);

    setCalendarState(prev => ({
      ...prev,
      selectedDate: date,
    }));

    setValueInput(date.toLocaleDateString());
    
  }
};


   useEffect(() => {
    
    addDaysToEndDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueDay]);
  
  
  useEffect(() => {
    updateSelectedMonth();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

  useEffect(() => {
    if (getDateStart) {
      getDateStart(calendarState.selectedDate ?? new Date());
    }
    if (getDateEnd) {
      getDateEnd(calendarState.selectedDate ?? new Date());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput, calendarState.selectedDate]);

 
   
 
 
 
  useEffect(() => {
    // Se não há diferença de dias, não precisa validar nada
    if (totalDays === undefined) return;

    if (totalDays >= 0) handleError(false);
    // Se a diferença for negativa, as datas estão fora de ordem
    if (totalDays < 0) {
      let message = '';

      if (dateType === 'start') {
        message = 'A data inicial deve ser menor que a final';
      } else if (dateType === 'end') {
        message = 'A data final deve ser maior que a inicial';
      }
        
      handleError(
        true,
        message,
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDays, dateType]);




  function formatSelectedDate(selected: Date | undefined) {
    if (!selected) return;
    const formatted = format(selected, 'dd/MM/yyyy');
    setValueInput(formatted);
    setCalendarState(prev => ({
      ...prev,
      selectedDate: selected,
    }));
  }


  function updateSelectedMonth() {
    const date = startOfDay(parse(valueInput, 'dd/MM/yyyy', new Date()));
    if (isNaN(date.getTime())) return;

    if (isBefore(date, onToday)) {
        handleError(true, 'A data escolhida deve ser igual ou posterior à data atual.' );
      return;
    }

    if (isAfter(date, limitDate)) {
        handleError(true, 'A data escolhida deve ser inferior a um ano.' );
      return;
    }

    handleError(false);
    setCalendarState({
      selectedDate: date,
      selectedMonth: startOfMonth(date),
    });
  }


  const handleClearDate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === 'Backspace') {
      setInputClear(true);
      return;
    }

    const isDigit = /^\d$/.test(key);
    if (!isDigit) {
      e.preventDefault();
      return;
    }

    setInputClear(false);
  };


  /* Mantém a máscara DD/MM/YYYY em tempo real */
  const handleInputChange = (value: string) => {
    if (inputClear) {
      handleError(false);
      return setValueInput(value);
    }

    if (value.length > 10) return;
    // 1. Remove qualquer /
    const digits = value.replace(/\//g, '');

    // 3. Quebra em partes
    let day: string = digits.slice(0, 2);
    let month: string = digits.slice(2, 4);
    const year = digits.slice(4, 8);

    // 4. Define separadores conforme o tamanho
    const sep1 = month ? '/' : '';
    const sep2 = year ? '/' : '';

    if (day.length > 0 && Number(day.charAt(0)) > 3) {
      day = day.padStart(2, '0');
    }

    if (month.length > 0 && Number(month.charAt(0)) > 1) {
      month = month.padStart(2, '0');
    }

    if (Number(day) > 31) {
        handleError(
        true,
        'O dia máximo permitido é 31.',
      );
      return;
    }

    if (Number(month) > 12) {
        handleError(
        true,
        'O mês máximo permitido é 12.',
      );
      return;
    }
    // 5. Junta tudo
    const formatted = `${day}${sep1}${month}${sep2}${year}`;
    handleError(false);
    setValueInput(formatted);
  };


  return (
    <div className="flex flex-col gap-1 w-full">
      <Label htmlFor="date" className="px-1 p-1 uppercase">
        {label}
      </Label>

      <Popover open={open} >
        <PopoverTrigger asChild>
          <div
            className={`
              flex
              justify-between
              items-center
              font-normal
              border-2 
              border-solid 
            border-gray-300
              hover:ring-[3px]
            hover:ring-black
              hover:border-transparent
              focus:outline-none
              rounded-sm
              ${formInfo.hasError ? 'border-red-500 ring-0' : ''}
              h-[43px]
            `}
          >
            <div
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open);
                updateSelectedMonth();
              }}
            >
              <CalendarDays />
            </div>

            <input
              aria-label="Campo de data"
              placeholder="DD/MM/YYYY"
              className="border-0 px-2 outline-0 h-full w-full box-border"
              type="text"
              onChange={ev => {
                handleInputChange(ev.target.value);
              }}
              onKeyDown={handleClearDate}
              value={valueInput}
            />

            <div
              onClick={() => {
                setCalendarState({ selectedDate: undefined, selectedMonth: undefined });
                setValueInput(onToday.toLocaleDateString());
                handleError(false);
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
            selected={calendarState.selectedDate ?? onToday}
            month={calendarState.selectedMonth ?? onToday}
            onMonthChange={month => setCalendarState(prev => ({ ...prev, selectedMonth: month }))}
            endMonth={limitDate}
            captionLayout="dropdown"
            disabled={{ before: onToday, after: limitDate }}
            onSelect={date => {
              if (getDateStart) {
                getDateStart(date ?? new Date());
              }
              if (getDateEnd) {
                getDateEnd(date ?? new Date());
              }
              formatSelectedDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
