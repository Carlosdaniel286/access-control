import * as React from "react";

import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Select, { selectClasses } from "@mui/joy/Select";
import { Label } from "@/components/ui/label";

import { RenderSelect, SelectOptions } from "@/types/selectType";
import { sharedSx } from "@/styles/inputSx";

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
  sx,
}: SelectOptions<T>) {
  const select = React.useMemo(() => {
    if (!options) return [];

    return options.map((option, id) => {
      if (typeof option === "string") {
        return { ...initRender, label: option, value: option, id };
      }

      const render = option as RenderSelect;
      return { ...initRender, ...render };
    });
  }, [options]);

  return (
    <div className="flex flex-col gap-2">
      <Label className="uppercase">{label}</Label>
      <Select
        onChange={(ev, value) => {
          if (!value) return;
          if (typeof value === "object") {
            getOptionLabel?.(value);
          }
        }}
        value={value?.toUpperCase()}
        placeholder={placeholder?.toUpperCase()}
        indicator={<KeyboardArrowDown />}
        sx={{
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
          textTransform:"uppercase",
          ...sharedSx,
          ...sx,
        }}
      >
        {select.map((item, index) => (
          <Option
          sx={{zIndex:1500,textTransform:'uppercase'}}
            
            key={`${item.id}-${index}`}
            value={item}
          >
            {item.label.toUpperCase()}
          </Option>
        ))}
      </Select>
    </div>
  );
}
