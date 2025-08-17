
'use client';

import React, { useEffect, useState, useCallback } from "react";
import { differenceInCalendarDays, startOfDay } from 'date-fns';
import { DatePicker } from "@/types/datePiker";
import { useFormError } from "@/hooks/useFormError";
import { InputMask } from "./InputMask";

export function DaysDifferenceInput({ startDate, endDate, countDay, onChange }: DatePicker) {
  const onToday = startOfDay(new Date());
  const [valueInput, setValueInput] = useState<string>("0");
  const { formInfo, handleError } = useFormError();
  const [preventInputChange, setPreventInputChange] = useState(false);


  const differenceDays = useCallback(() => {
    const start = startDate ?? onToday;
    const end = endDate ?? onToday;
    const days = differenceInCalendarDays(end, start);
    if (days < 0) return;

    setValueInput(days.toString());

    if (countDay) {
      countDay(days);
    }
  }, [startDate, endDate, countDay, onToday]);

  useEffect(() => {
    if (!preventInputChange) return
    differenceDays();
  }, [differenceDays, preventInputChange]);

  const handleValueInput = useCallback((ev?: string) => {
    console.log('ev')
    if (!ev) return;

    const onlyNumbers = ev.replace(/\D/g, '');
    const formatted = parseInt(onlyNumbers);

    if (formatted < 0 || formatted > 365) {
      handleError(true, "O número deve ser entre 1 e 365 dias");
      return;
    }

    handleError(false);
    const text = isNaN(formatted) ? '' : formatted.toString();
    setValueInput(text);

    if (!onChange || isNaN(formatted)) return;

    onChange(formatted);
  }, [handleError, onChange]);



  return (
    <div className="flex flex-col  gap-2">
      <div className="flex items-center gap-2">
        <InputMask
          onBlur={((ev) => {
            setPreventInputChange(ev)
          })}
          value={valueInput}
          hasError={formInfo.hasError}
          message={formInfo.message}
          mask="000"
          label="Dias de permanência"
          onChange={(ev) => {
            if (!ev) return;
            handleValueInput(ev.target.value);
          }}
          className={`max-w-[80px] min-h-auto text-center ${formInfo.hasError ? 'border-red-500 ring-0' : ''}`}
          placeholder="Dias"
        />
      </div>
    </div>
  );
}

// Memoiza o componente para evitar re-renderizações desnecessárias

