'use client'

import { ChangeEvent, useEffect, useState, useRef, RefObject } from "react";
import { IMaskInput } from 'react-imask'
import { cn } from "@/lib/utils";
import { useResizeDetector } from "react-resize-detector";
import { useDebounce } from "@uidotdev/usehooks";
import { Label } from "@/components/ui/label";

type OptionType = { id: number | string };
type AutocompleteProps<T extends OptionType> = {
  className?: string;
  options?: T[];
  placeholder?: string;
  label?: string;
  getValue?: (value: T) => void;
  freeSolo?: boolean;
  disabled?: boolean;
  optionsItem?: keyof T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mask?: any | 'string' | 'number';
};

type AutocompleteDropdownProps<T extends OptionType> = {
  options?: T[];
  handleOptionClick: (option: T) => void;
  handleOptions: (option: T) => React.ReactNode;
  className?: string;
  dropdownRef?: RefObject<HTMLUListElement | null>
  width: number | undefined;
};

 function AutocompleteDropdown<T extends OptionType>({
  options,
  handleOptionClick,
  handleOptions,
  className,
  dropdownRef,
  width,
}: AutocompleteDropdownProps<T>) {


  return (
    <ul
      ref={dropdownRef}
      style={{ width }}
      className={cn(
        "sm:mt-2 sm:absolute mb-3 z-[1600] sm:top-full sm:left-0 border-2 border-gray-200 bg-gray-50 flex flex-col max-h-[190px] sm:max-h-[250px] gap-1 p-1 overflow-y-auto",
        className
      )}
    >
      {options?.map((option) => (
        <li
          onClick={() => handleOptionClick(option)}
          key={option.id}
          className="p-1.5 cursor-pointer hover:bg-gray-100"
        >
          {handleOptions(option)}
        </li>
      ))}
    </ul>
  );
}

export function Autocomplete<T extends OptionType>({
  options,
  className,
  label,
  placeholder,
  mask,
  optionsItem,
  getValue,
}: AutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { width, ref } = useResizeDetector();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const debouncedInputValue = useDebounce(inputValue, 300);
 
  // Hook para detectar cliques fora do componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  

  // Efeito para filtrar as opções com debounce
  useEffect(() => {
   if(!options) return
    if (debouncedInputValue.trim() === "") {
       setFilteredOptions([]);
      return;
    }
    const newFilteredOptions = options.filter((item) => {
      // Usa a prop 'optionsItem' para acessar a chave dinâmica e garante que ela seja uma string
      const optionValue = item[optionsItem as keyof T];
      if (typeof optionValue === "string") {
        return optionValue.toUpperCase().includes(debouncedInputValue.toUpperCase());
      }
      return false;
    });

   setFilteredOptions(newFilteredOptions);
   }, [debouncedInputValue,options,optionsItem]);

  
  
  
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleOptions = (option: T) => {
    // Acessa a chave dinâmica e garante que o valor seja uma string
    const optionValue = option[optionsItem as keyof T];
    return typeof optionValue === 'string' ? optionValue.toUpperCase() : '';
  };

  const handleOptionClick = (option: T) => {
    const optionValue = option[optionsItem as keyof T];
    if (typeof optionValue === 'string') {
      setInputValue(optionValue);
     }
    setIsDropdownOpen(false);
    setFilteredOptions([]); // Limpa as opções filtradas para evitar que o dropdown abra novamente
    if (getValue) {
      getValue(option);
    }
  };

  const showDropdown = isDropdownOpen && filteredOptions.length > 0;
  const noResults = isDropdownOpen && filteredOptions.length === 0 && debouncedInputValue.trim() !== "";

  return (
    <>
   {noResults && (
        <div
          style={{ width }}
          className=" sm:absolute  uppercase mb-4 py-4 px-1.5 rounded-md z-[1600]  cursor-pointer bg-slate-100 mt-2"
        >
          <span>Sem opção</span>
        </div>
      )}
    <div ref={ref} className="relative">
       {showDropdown && (
        <AutocompleteDropdown
         options={filteredOptions}
         handleOptionClick={handleOptionClick}
         handleOptions={handleOptions}
         dropdownRef={dropdownRef}
         className={className}
         width={width}
        />
      )}
      
       {label !== undefined && (
        <Label className="uppercase mb-2.5 ">{label}</Label>
      )}
      <IMaskInput
        placeholder={placeholder}
        label={label}
        value={inputValue}
        onChange={handleChange}
        className="h-[55px] inputMask"
        mask={mask}
      />
    
     
    </div>
    
    </>
  );
}