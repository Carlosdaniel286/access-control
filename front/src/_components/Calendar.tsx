'use client'

import { Calendar as CalendarCom } from "@/components/ui/calendar"
import { IMaskInput } from "react-imask"
import { format, startOfDay, addYears, parse, isValid, startOfMonth, addMonths } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useMemo, useState, useRef, useEffect, useCallback } from "react"
import { CalendarDays, X } from "lucide-react"
import useClickOutside from "@/hooks/useClickOutside"
import { DatePicker } from "@/types/datePiker"
import { useCalendar } from "@/contexts/CalendarContext"

export function Calendar({ dateType }: DatePicker) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [selectedDate, setSelectedDate] = useState<Date>(today)
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(today)

  const calendarLimitDate = useMemo(
    () => addYears(startOfDay(startOfMonth(addMonths(new Date(), 1))), 1),
    []
  )

  const { containerRef } = useClickOutside(() => setIsCalendarVisible(false))
  const inputRef = useRef<HTMLInputElement>(null)

  const { handleDateCalendar, updateDate } = useCalendar()

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible((prev) => !prev)
  }

  const resolveDateByType = useCallback(() => {
    switch (dateType) {
      case "startDate":
        return updateDate.startDate

      case "endDate":
        return updateDate.endDate

      default:
        return today
    }
  }, [dateType, updateDate, today])

  useEffect(() => {
    const resolvedDate = resolveDateByType()
      setCurrentMonth(resolvedDate)
  }, [resolveDateByType])

  useEffect(() => {
    if (dateType) handleDateCalendar(dateType, selectedDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateType, selectedDate])

  function parseAndValidateDate(value: string): Date | null {
    const parsedDate = startOfDay(parse(value, "dd/MM/yyyy", new Date()))
    if (!isValid(parsedDate)) return null
    if (parsedDate < today) return null
    if (parsedDate > calendarLimitDate) return null
    return parsedDate
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Calendário */}
      {isCalendarVisible && (
        <div className="absolute bottom-14 left-[-1rem] z-50">
          <CalendarCom 
            mode="single"
            selected={selectedDate}
            onSelect={(d) => {
              if (d) {
                setSelectedDate(d)
              }
              setIsCalendarVisible(false)
            }}
            className="rounded-md border shadow-sm"
            
            locale={ptBR}
            disabled={{ before: dateType=='endDate'? updateDate.startDate:today, after: addYears(today, 1) }}
            endMonth={calendarLimitDate}
            month={currentMonth}
            onMonthChange={(month) => {
              const limitDate = addYears(startOfDay(today),1)
              console.log(limitDate)
              console.log(limitDate <month)
              
              setCurrentMonth(month)
            }}
            captionLayout="dropdown"
          />
        </div>
      )}

      {/* Input e ícones */}
      <div className="inputMask flex min-h-[58px] gap-1 items-center justify-center">
        <CalendarDays className="cursor-pointer" onClick={toggleCalendarVisibility} />

        <IMaskInput
          ref={inputRef}
          aria-label="Campo de data"
          placeholder="DD/MM/YYYY"
          onAccept={(ev) => {
            const parsedDate = parseAndValidateDate(ev)
            if (!parsedDate) return
            if (dateType) handleDateCalendar(dateType, parsedDate)
            setCurrentMonth(parsedDate)
            if (parsedDate.getTime() !== selectedDate.getTime()) {
              setSelectedDate(parsedDate)
            }
          }}
          onChange={(ev) => {
            const value = ev.currentTarget.value
            console.log(value)
            const parsedDate = parseAndValidateDate(value)
            if (!parsedDate) return
            setSelectedDate(parsedDate)
          }}
          className="focus:outline-none pl-4 w-[150px] border-0 p-0 ring-0 hover:ring-0"
          mask="00/00/0000"
          value={format(resolveDateByType(), "dd/MM/yyyy")}
        />

        <X
          className="cursor-pointer"
          onClick={() => {
            setSelectedDate(updateDate.startDate)
          }}
        />
      </div>
    </div>
  )
}
