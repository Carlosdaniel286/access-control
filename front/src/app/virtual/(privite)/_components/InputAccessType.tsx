// ...existing code from typeAcessInput.tsx, export function InputAccessType ...
import { SxProps } from "@mui/joy/styles/types/theme";
import { InputSearch } from "./InputSeach"

const options = [
  { id: 1, label: 'Pedestre', value: 'pedestre' },
  { id: 2, label: 'Veículo', value: 'veiculo' },
];


export function InputAccessType ({sx}:{sx?: SxProps}){
  return(
      <InputSearch
      sx={sx}
      placeholder="Tipo de acesso"
      options={options}
      getOptionLabel={((options)=>{
        return options.label
      })}
      />
   )}