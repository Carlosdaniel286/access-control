'use client'

import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";
import { differenceInCalendarDays ,startOfDay } from 'date-fns';
import { DatePicker } from "@/app/types/datePiker";


export function InputDatePiker({startDate,endDate,countDay}:DatePicker) {
  const onToday = startOfDay(new Date())
  const [valueInput, setValueInput] = useState<string>("");
  const [formInfo, setFormInfo] = useState({
    hasError: false,
    message: "",
  });

   function differenceDays() {
   const start = startDate??onToday
    const end= endDate??onToday
 
    const days= differenceInCalendarDays(end, start)
    setValueInput(days.toString());
    if(countDay){
        console.log(countDay)
        countDay(days)
    }
    
   }

   useEffect(()=>{
   differenceDays()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[startDate,endDate])
  
  
  
  
  
  function handleValueInput(ev: string) {
   
    const onlyNumbers = ev.replace(/\D/g, '');
   
    const formatted = parseInt(onlyNumbers);
    if (formatted < 1 || formatted > 365) {
      setFormInfo({
        hasError: true,
        message: "O número deve ser entre 1 e 365 dias",
      });
      return;
    }

    setFormInfo((prev) => ({ ...prev, hasError: false }));
    setValueInput(onlyNumbers);
  }

  const handleDigitOnlyKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const isDigit = /^\d$/.test(key);
    const clear = key === "Backspace";
    console.log(clear)
    if (clear) return;
    console.log(clear)
    if (!isDigit) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="px-1 p-1">Tempo de permanência</Label>
      <div className="flex items-center gap-2">
      <input
        value={valueInput}
        onChange={(ev) => {
          handleValueInput(ev.target.value);
        }}
        onKeyDown={handleDigitOnlyKeyPress}
        type="text"
         className={`
          input 
          max-w-[50px]
          p-2
          ${formInfo.hasError?'border-red-500 ring-0':''}
            
        `}
        placeholder="Dias"
      />
      <span className="capitalize">dias</span>
      </div>
      <div className="px-0">
        {formInfo.hasError && (
          <span className="flex p-0 items-center gap-1 text-[0.8rem] text-red-500">
            <Info className="w-5 h-5 p-0 text-red-600" color="red" />
            {formInfo.message}
          </span>
        )}
      </div>
    </div>
  );
}
