import { SxProps } from "@mui/joy/styles/types/theme";
import { InputSearch } from "./seachInput"

const options = [
  { id: 1, label: 'Pedestre', value: 'pedestre' },
  { id: 2, label: 'Veículo', value: 'veiculo' },
];


export function AccessTypeInput ({sx}:{sx?: SxProps}){
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