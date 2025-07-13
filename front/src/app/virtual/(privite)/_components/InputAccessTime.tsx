// ...existing code from timeAccessInput.tsx, export function InputAccessTime ...
import { InputSearch } from "./InputSeach"

const options = [
  { id: 1, label: 'Fixo', value: 'fixo' },
  { id: 2, label: 'Esporádico', value: 'esporadico' },
];

export function TimeAccessInput(){
  return(
      <InputSearch
      placeholder="tipo de cadastro ..."
      options={options}
      getOptionLabel={((options)=>{
        return options.label
      })}
      />
   )}