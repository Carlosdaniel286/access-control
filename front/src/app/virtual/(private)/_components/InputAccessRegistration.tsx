// ...existing code from timeAccessInput.tsx, export function InputAccessTime ...
import { AccessRegistration } from "@/app/types/valueForm";
import { optionsAccessRegistration } from "@/constants/accessOptions";
import { SelectDemo } from "./Select";





export function InputAccessRegistration({getValue}:{getValue?: (value: AccessRegistration | null | string) => void;}){
   return(
      <SelectDemo
      label="Tipo de resgistro"
      onValueChange={getValue}
      placeholder="tipo de cadastro ..."
      options={optionsAccessRegistration}
      getOptionLabel={((options)=>{
       const {id,label,value}= options
       return {
        id,label,value
       }
      })}
      />
   )}