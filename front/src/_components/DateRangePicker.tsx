'use client'

import { CalendarProvider, useCalendar } from "@/contexts/CalendarContext"
import { Calendar } from "./Calendar"
import { InputMask } from "./InputMask"
import { Label } from "@/components/ui/label"

// Componente interno que consome o contexto
function DateRangePickerContent() {
  const { differenceInDay, addDate } = useCalendar()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label className="uppercase" htmlFor="startDate">Data de Início</Label>
        <Calendar dateType="startDate" />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="uppercase" htmlFor="endDate">Data de Término</Label>
        <Calendar dateType="endDate" />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="uppercase" htmlFor="daysInput">Dias de Permanência</Label>
        <InputMask
          id="daysInput"
          value={differenceInDay.toString()}
          className="text-center"
          mask="000"
          onChange={(ev) => addDate(Number(ev.target.value))}
        />
      </div>
    </div>
  )
}

// Componente público que engloba o provedor de contexto
export function DateRangePicker() {
  return (
    <CalendarProvider>
      <DateRangePickerContent />
    </CalendarProvider>
  )
}
