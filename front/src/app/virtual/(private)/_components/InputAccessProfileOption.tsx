

import { AccessProfileOption } from "@/app/types/valueForm";
import { InputSearch } from "./InputSearch"
import { optionsAccessProfile } from "@/constants/accessOptions";




export function InputAccessProfileOption({getValue}:{getValue?: (value: AccessProfileOption | null) => void;}){
  return(
      <InputSearch
       getValue={((value: AccessProfileOption | null)=>{
        if (getValue) {
          getValue(value);
        }
      })}
      placeholder="Digite o objetivo ..."
      label="Categoria de visita"
      options={optionsAccessProfile}
      getOptionLabel={((options)=>{
        return options.label
      })}
      />
   )}