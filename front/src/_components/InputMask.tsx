'use client';

import { MaskedInputProps } from "@/types/MaskedInputProps";
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
  onBlur,
  onChange
  // remova onChange, pois não é usado
}: MaskedInputProps) {
  const { formInfo } = useFormError();
  const typeString = /^[a-zA-Z\s]*$/;
  const typeNumber = /^\d+$/

  let valueType;

switch (mask) {
  case 'number':
    valueType = typeNumber;
    break;
  case 'string':
    valueType = typeString;
    break;
 
  default:
    valueType = mask // fallback
}
 
 
  return (
    <div className="flex flex-col gap-2">
      {label !== undefined && (
        <Label className="uppercase">{label}</Label>
      )}

      <IMaskInput
        onBlur={() => onBlur?.(true)}
        onFocus={() => onBlur?.(false)}
        className={cn(
          'inputMask',
          formInfo.hasError && 'border-red-500 ring-0',
          className
        )}
        id={id}
        name={name}
        mask={valueType || ''}
        aria-label={ariaLabel}
        unmask={true}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Digite algo..."}
        onAccept={(value) => {
          if (onAccept) {
            onAccept(value);
          }
        }}
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