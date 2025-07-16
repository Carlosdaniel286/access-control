// ...existing code from adressSeachInput.tsx, export function InputAddressSearch ...
import { SxProps } from "@mui/joy/styles/types/theme";
import { InputSearch } from "./InputSearch";
import { optionsAccessAddressResident } from "@/constants/accessOptions";
import { AccessAddressResident } from "@/app/types/valueForm";

export function InputAddressSearch(
    { sx ,getValue}: 
    { sx?: SxProps,
    getValue?: (value: AccessAddressResident  | null) => void; 

}) {
    
        return (
        <InputSearch
           label="Endereço do morador"
              sx={sx}
             getValue={((value: AccessAddressResident  | null)=>{
          if (getValue) {
             getValue(value);
            }
            })}
            placeholder="endereço do morador ou nome..."
            options={optionsAccessAddressResident}
            getOptionLabel={((options) => {
                return options.label
            })}
        />
    )
}