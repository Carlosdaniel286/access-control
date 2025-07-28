import * as React from "react"

const initRender:RenderSelect ={
    id:0,
    label:'',
    value:''
}

import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Select , { selectClasses } from '@mui/joy/Select';
import { Label } from "@/components/ui/label"

import { RenderSelect, SelectOptions } from "@/app/types/selectType";
import { sharedSx } from "@/styles/inputSx";
export  function SelectDemo<T>({
   // onValueChange,
    value,
   options,
   placeholder,
   getOptionLabel,
   label,
   sx
   
}:SelectOptions<T>) {
 
  const select = React.useMemo(() => {
 

  if (!options) return [];

  return options.map((option, id) => {
    if (typeof option === 'string') {
      return { ...initRender, label: option, value: option, id };
    }

    const render = option as RenderSelect; // se não for array!
    return { ...initRender, ...render };
  });
}, [options]);
  
  return (
    <div className="flex flex-col gap-2">
      <Label className="uppercase">{label}</Label>
    <Select
       onChange={((ev,value)=>{
        if(!value) return
        if(typeof value ==='object'){
          getOptionLabel?.(value)
        }
      })}
       
       
       value={value}
       placeholder={placeholder}
       indicator={<KeyboardArrowDown />}
      
      sx={{
       // width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
         ...sharedSx,
         ...sx
      }}
    >
      
        {select.map((item,index)=>(
           <Option className="capitalize"  key={`${item.id}-${index}`} 
           value={item}>{item.label}</Option>
          ))}
    </Select>
    </div>
  );
}



