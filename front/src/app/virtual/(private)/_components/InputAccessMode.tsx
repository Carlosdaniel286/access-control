// ...existing code from typeAcessInput.tsx, export function InputAccessType ...
import { SxProps } from "@mui/joy/styles/types/theme";
import { InputSearch } from "./InputSearch"
import { AccessMode } from "@/app/types/valueForm";
import { optionsAccessMode } from "@/constants/accessOptions";

export function InputAccessMode({sx, getValue}: {sx?: SxProps,  getValue?: (value: AccessMode | null) => void;}){
  return(
      <div>
      <InputSearch
      sx={sx}
      getValue={((value: AccessMode | null)=>{
        if (getValue) {
          getValue(value);
        }
      })}
      label="Tipo de acesso"
      placeholder="Tipo de acesso"
      options={optionsAccessMode}
      getOptionLabel={((options: AccessMode)=>{
        return options.label
      })}
      />
    </div>
   )}