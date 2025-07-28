import { AccessProfileOption } from "@/app/types/valueForm";
import { optionsAccessProfile } from "@/constants/accessOptions";
import { SelectDemo } from "./Select";




export function InputAccessProfileOption({getValue}:{getValue?: (value: AccessProfileOption | null | string) => void;}){
  return(
      <SelectDemo
       onValueChange={getValue}
      placeholder="Digite o objetivo ..."
      label="Categoria de visita"
      options={optionsAccessProfile}
      getOptionLabel={((options)=>{
       const {id,label,value}= options
       return {
        id,label,value
       }
      })}
      />
   )}