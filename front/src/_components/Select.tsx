import * as React from "react";
import { Label } from "@/components/ui/label";
import { RenderSelect, SelectOptions } from "@/types/selectType";
import { cn } from "@/lib/utils";
const initRender: RenderSelect = {
  id: 0,
  label: "",
  value: "",
};

export function SelectDemo<T>({
  value,
  options,
  placeholder,
  getOptionLabel,
  label,
  className
}: SelectOptions<T>) {
  const selectOptions = React.useMemo(() => {
    if (!options) return [];

    return options.map((option, id) => {
      if (typeof option === "string") {
        return { ...initRender, label: option, value: option, id };
      }

      const render = option as RenderSelect;
      return { ...initRender, ...render };
    });
  }, [options]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = selectOptions.find(
      (option) => option.value === selectedValue
    );

    if (selectedOption) {
      getOptionLabel?.(selectedOption as T);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="uppercase">{label}</Label>
      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          className={cn(
          "border-2 border-solid border-gray-300",
          "py-2.5 px-2",
          "text-gray-600",
          "rounded-sm",
          "w-full h-full",
          "outline-none focus:outline-none",
          "hover:border-transparent hover:shadow-[0_0_0_3px_black]",
          "uppercase",
          className
      )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder.toUpperCase()}
            </option>
          )}
          {selectOptions.map((item, index) => (
            <option  key={`${item.id}-${index}`} value={item.value}>
              {item.label.toUpperCase()}
            </option>
          ))}
        </select>
        
      </div>
    </div>
  );
}