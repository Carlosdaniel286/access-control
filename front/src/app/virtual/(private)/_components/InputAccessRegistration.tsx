// ...existing code from timeAccessInput.tsx, export function InputAccessTime ...



import { AccessRegistration } from "@/app/types/valueForm";
import { InputSearch } from "./InputSearch"
import { optionsAccessRegistration } from "@/constants/accessOptions";





export function InputAccessRegistration({getValue}:{getValue?: (value: AccessRegistration | null) => void;}){
   return(
      <InputSearch
      label="Tipo de resgistro"
      getValue={((value: AccessRegistration| null)=>{
        if (getValue) {
          getValue(value);
        }
      })}
      placeholder="tipo de cadastro ..."
      options={optionsAccessRegistration}
      getOptionLabel={((options)=>{
        return options.label
      })}
      />
   )}