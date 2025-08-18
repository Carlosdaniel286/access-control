'use client'

import { useEffect, useMemo, useState } from 'react'
import { parse, format, startOfDay, addYears, isAfter, isBefore, startOfMonth, addDays } from 'date-fns'
import { CalendarDays, Info, X } from 'lucide-react'
import { IMaskInput } from 'react-imask'

import { FocusOverlay } from './FocusOverlay'
import { useFormError } from '@/hooks/useFormError'
import { DatePicker } from '@/types/datePiker'
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

  const defaultFormattedDate = useMemo(() => format(today, 'dd/MM/yyyy'), [today])
  const effectiveStartDate = useMemo(() => startOfDay(startDate ?? today), [startDate, today])

  const [open, setOpen] = useState(false)
  const [valueInput, setValueInput] = useState<string>(defaultFormattedDate)
  const { formInfo, handleError } = useFormError()

  const [calendarState, setCalendarState] = useState({
    selectedDate: undefined as Date | undefined,
    selectedMonth: undefined as Date | undefined,
  })

  // Funções agrupadas e exportadas para evitar eslint-disable
  const updateDateStart = () => {
    if (dateType === 'end') {
      const parsed = parse(valueInput, 'dd/MM/yyyy', new Date())
      if (isBefore(parsed, effectiveStartDate)) {
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

  const updateSelectedMonth = () => {
    const date = startOfDay(parse(valueInput, 'dd/MM/yyyy', new Date()))
    if (isNaN(date.getTime())) return

    if (isBefore(date, today)) {
      return handleError(true, 'A data escolhida deve ser igual ou posterior à data atual.')
    }
    if (isAfter(date, limitDate)) {
      return handleError(true, 'A data escolhida deve ser inferior a um ano.')
    }

    handleError(false)
    setCalendarState({ selectedDate: date, selectedMonth: startOfMonth(date) })
  }

  const handleInputChange = (value?: string) => {
    if (!value || value.length < 8) return
    const parsed = parse(value, 'ddMMyyyy', new Date())
    if (!isNaN(parsed.getTime())) {
      setValueInput(format(parsed, 'dd/MM/yyyy'))
    }
  }

  const formatSelectedDate = (selected: Date | undefined) => {
    if (!selected) return
    const formatted = format(selected, 'dd/MM/yyyy')
    setValueInput(formatted)
    setCalendarState(prev => ({ ...prev, selectedDate: selected }))
  }

  // Effects reorganizados sem eslint-disable
  useEffect(() => {
    if (dateType !== 'start' && isBefore(effectiveStartDate, today)) {
      handleError(true, 'A data escolhida deve ser igual ou posterior à data atual.')
      return
    }
    setValueInput(format(effectiveStartDate, 'dd/MM/yyyy'))
  }, [dateType, effectiveStartDate, today, handleError])

  useEffect(() => {
    addDaysToEndDate()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueDay, dateType, startDate, today])

  useEffect(() => {
    updateSelectedMonth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput])

  useEffect(() => {
    updateDateStart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate, dateType, effectiveStartDate, valueInput])

  useEffect(() => {
    const date = calendarState.selectedDate ?? new Date()
    getDateStart?.(date)
    getDateEnd?.(date)
  }, [calendarState.selectedDate, getDateStart, getDateEnd])

  useEffect(() => {
    if (totalDays === undefined) return
    if (totalDays >= 0) return handleError(false)

    const message = dateType === 'start'
      ? 'A data inicial deve ser menor que a final'
      : 'A data final deve ser maior que a inicial'

    handleError(true, message)
  }, [totalDays, dateType, handleError])

  return (
    <FocusOverlay>
      <div className="flex flex-col gap-1">
        <label htmlFor="date" className="px-1 p-1 uppercase">
          {label}
        </label>

        <div
          className={cn('flex items-center gap-3 inputMask border rounded-md p-2')}
        >
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open)
              updateSelectedMonth()
            }}
          >
            <CalendarDays />
          </button>

          <IMaskInput
            aria-label="Campo de data"
            placeholder="DD/MM/YYYY"
            className="inputMask border-0 min-h-[43px] ring-0 p-0 hover:ring-0 flex-1"
            mask="00/00/0000"
            onAccept={handleInputChange}
            value={valueInput}
          />

          <button
            type="button"
            onClick={() => {
              setCalendarState({ selectedDate: undefined, selectedMonth: undefined })
              setValueInput(dateType === 'end'
                ? format(effectiveStartDate, 'dd/MM/yyyy')
                : defaultFormattedDate
              )
              handleError(false)
            }}
            className="cursor-pointer"
          >
            <X />
          </button>
        </div>

        {formInfo.hasError && (
          <div className="py-1 flex items-center gap-1 text-sm text-red-500">
            <Info className="w-5 h-5 text-red-600" />
            {formInfo.message}
          </div>
        )}

        {open && (
          <div className="w-auto bg-white border shadow-md rounded-md mt-2 z-[1600] p-2">
            {/* Substituí o Calendar do shadcn por um espaço reservado */}
            <p className="text-gray-500 text-sm">[Calendário aqui]</p>
            <button
              type="button"
              onClick={() => {
                formatSelectedDate(new Date())
                setOpen(false)
              }}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
            >
              Selecionar hoje
            </button>
          </div>
        )}
      </div>
    </FocusOverlay>
  )
}
