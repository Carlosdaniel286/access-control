'use client';

import { MaskedInputProps } from "@/app/types/MaskedInputProps";
import { Label } from "@/components/ui/label";
import { useFormError } from "@/hooks/useFormError";
import { Info } from "lucide-react";
import { IMaskInput } from 'react-imask';
import { cn } from "@/lib/utils";

export function InputMask({
  name,
  placeholder,
  value,
  className = '',
  ariaLabel,
  id,
  label,
  mask,
  onAccept,
  onChange,
  onBlur
  // react-imask não usa, pode ignorar
}: MaskedInputProps) {
  const { formInfo } = useFormError();
 
  // react-imask chama onAccept quando o valor muda, passa valor já "unmasked"
  
  
  function handleAccept(value: string) {
    if (onAccept) {
      // repassando só o valor "limpo"
      onAccept(value);
    }
  }

  function handleChanger(e:React.ChangeEvent<HTMLInputElement>) {
     if (onChange) {
      // repassando só o valor "limpo"
      onChange(e);
    }
  }
  return (
    <div className="flex flex-col gap-2">
      {label !== undefined && (
        <Label className="text-transform: uppercase">{label}</Label>
      )}

      <IMaskInput
      onBlur={(()=>{
          onBlur?.(true)
      })}
      onFocus={() => {
        onBlur?.(false)
     }}
        className={cn(
          'inputMask',
          formInfo.hasError && 'border-red-500 ring-0',
          
          className
        )}
        id={id}
        name={name}
        mask={mask || '' }
        aria-label={ariaLabel}
        unmask={true}
        value={value}
        placeholder={placeholder || "Digite algo..."}
        onAccept={handleAccept}
        onChange={handleChanger}
        
      />

      {formInfo.hasError && (
        <div className="py-1">
          <span className="flex items-center gap-1 text-[0.8rem] text-red-500">
            <Info className="w-5 h-5 text-red-600" color="red" />
            {formInfo.message}
          </span>
        </div>
      )}
    </div>
  );
}
