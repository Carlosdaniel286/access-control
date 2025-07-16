
'use client'
//import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { differenceInCalendarDays, startOfDay } from 'date-fns';
import { DatePicker } from "@/app/types/datePiker";
import { BaseInput } from "./BaseInput";
import { useFormError } from "@/hooks/useFormError";



export function InputDatePicker({ startDate, endDate, countDay, onChange }: DatePicker) {
  const onToday = startOfDay(new Date());
  const [valueInput, setValueInput] = useState<string>("");
  const { formInfo, handleError } = useFormError();


  function differenceDays() {
    const start = startDate ?? onToday;
    const end = endDate ?? onToday;
    const days = differenceInCalendarDays(end, start);
    if (days >= 0) {
      setValueInput(days.toString());
    }

    if (countDay) {
      countDay(days);
    }
  }

  useEffect(() => {
    differenceDays();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  function handleValueInput(ev: string) {
    const onlyNumbers = ev.replace(/\D/g, '');
    const formatted = parseInt(onlyNumbers);
    if (formatted < 0 || formatted > 365) {
      handleError(
        true,
        "O número deve ser entre 1 e 365 dias",
      );
      return;
    }
    handleError(false);
    const text = isNaN(formatted) ? '' : formatted.toString();
    setValueInput(text);
    if (!onChange) return;
    if (isNaN(formatted)) return;
    onChange(formatted);
  }


  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <BaseInput
          value={valueInput}
          hasError={formInfo.hasError}
          message={formInfo.message}
          label="Dias de permanência"
          onChange={(ev) => {
            handleValueInput(ev.target.value);
          }}
          // onKeyDown={handleDigitOnlyKeyPress}
          type="text"
          className={`max-w-[50px]  ${formInfo.hasError ? 'border-red-500 ring-0' : ''}`}
          placeholder="Dias"
        />
      </div>
    </div>
  );
}
