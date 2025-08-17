'use client'
import { useEffect, useState, useCallback, useMemo } from "react";
import { CalendarDemo } from "./Calendar";
import { InputDatePicker } from "./InputDatePicker";
import { startOfDay } from "date-fns";

type DateInfo = {
  dateStart: Date | undefined;
  dateEnd: Date | undefined;
  totalDays: number;
  valueDay: number;
};

type DatePickerProps = {
  getDateFull?: (dateInfo: DateInfo) => void;
}

export function DatePicker({ getDateFull }: DatePickerProps) {
 const today = useMemo(() => startOfDay(new Date()), [])

  const [date, setDate] = useState<DateInfo>({
    dateStart: today,
    dateEnd: today,
    totalDays: 0,
    valueDay: 0,
  });

  // Memoizar a função para setar dateStart
  const handleDateStart = useCallback((ev: Date) => {
    setDate(prev => ({ ...prev, dateStart: ev }));
  }, []);

  // Memoizar a função para setar dateEnd
  const handleDateEnd = useCallback((ev: Date) => {
    setDate(prev => ({ ...prev, dateEnd: ev }));
  }, []);

  // Memoizar a função para setar valueDay
  const handleValueDay = useCallback((day: number) => {
    setDate(prev => ({ ...prev, valueDay: day }));
  }, []);

  // Memoizar a função para setar totalDays
  const handleTotalDays = useCallback((ev: number) => {
    setDate(prev => ({ ...prev, totalDays: ev }));
  }, []);

  useEffect(() => {
    if (getDateFull) {
      getDateFull(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className="gap-3 flex flex-col ">
      <CalendarDemo
        label="Data inicial"
        dateType="start"
        totalDays={date.totalDays}
        startDate={date.dateStart}
        endDate={date.dateEnd}
        getDateStart={handleDateStart}
      />
      <CalendarDemo
        dateType="end"
        label="Data final"
        startDate={date.dateStart}
        endDate={date.dateEnd}
        totalDays={date.totalDays}
        valueDay={date.valueDay}
        getDateEnd={handleDateEnd}
      />
      <InputDatePicker
        startDate={date.dateStart}
        endDate={date.dateEnd}
        onChange={handleValueDay}
        countDay={handleTotalDays}
      />
    </div>
  );
}
