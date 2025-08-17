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
         'inputMask',
          className
      )}
        >
          
          {selectOptions.map((item, index) => (
            <option className="inputMask" key={`${item.id}-${index}`} value={item.value} >
              {item.label.toUpperCase()}
            </option>
          ))}
        </select>
        
      </div>
    </div>
  );
}