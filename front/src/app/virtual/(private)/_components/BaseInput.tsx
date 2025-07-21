'use client';
import { BaseInputProps } from "@/app/types/baseInput";
import { Label } from "@/components/ui/label";
import { useFormError } from "@/hooks/useFormError";
import { Info } from "lucide-react";
import { useEffect } from "react";

export function BaseInput({
  name,
  placeholder,
  value,
  onChange,
  hasError,
  message,
  className='',
  ariaLabel,
  id,
  type,
  onKeyDown,
  allowedKeys,
  deniedKeys,
  inputKind,
  label
}: BaseInputProps) {
  const { formInfo, handleError } = useFormError();

  useEffect(() => {
    handleError(hasError || false, message || '');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError, message]);

  const restrictToDigits = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if(inputKind==null) return  handleError(false);
    if (deniedKeys && deniedKeys.includes(key)) {
      e.preventDefault();
      return;
    }

    const clear = allowedKeys == undefined ? key === 'Backspace' : allowedKeys.includes(key);
    if (clear) return;

    if (inputKind === "numbers") {
      const isDigit = /^\d$/.test(key);
      if (!isDigit) {
        handleError(true, 'Apenas números são permitidos.');
        return e.preventDefault();
      }
    }

    if (inputKind === "letters") {
      const isLetter = /^[a-zA-ZÀ-ÿ\s]$/.test(key);
      if (!isLetter) {
        handleError(true, 'Apenas letras são permitidas.');
        return e.preventDefault();
      }
    }
     if (inputKind === "alfaNumerico") {
      const isalfaNumerico = /^[a-zA-Z0-9]+$/.test(key);
      if (!isalfaNumerico) {
        handleError(true, 'Apenas letras e números são permitidas.');
        return e.preventDefault();
      }
    }

    handleError(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-transform: uppercase">{label}</Label>
      <input
      className={`
       border-2
       py-[10px]
        border-solid
        px-2
      border-gray-300
        rounded-sm
        w-full
        hover:ring-black
        hover:ring-[3px]
        hover:border-transparent
        focus:outline-none
        ${formInfo.hasError && 'border-red-500 ring-0'},
        ${className}
      `}
        id={id}
        type={type || "text"}
        name={name}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Digite algo..."}
        onKeyDown={onKeyDown ?? restrictToDigits}
      />

      <div className="py-1">
        {formInfo.hasError && (
          <span className="flex items-center gap-1 text-[0.8rem] text-red-500">
            <Info className="w-5 h-5 text-red-600" color="red" />
            {formInfo.message}
          </span>
        )}
      </div>
    </div>
  );
}
