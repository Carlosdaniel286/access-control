import { InputSearch } from "./seachInput"

const options = [
  { id: 1, label: 'Visitante', value: 'visitante' },
  { id: 2, label: 'Prestador', value: 'prestador' },
  { id: 3, label: 'Entregador', value: 'entregador' },
  { id: 4, label: 'Morador', value: 'morador' },
];

export function InputVisitCategory(){
  return(
      <InputSearch
      placeholder="Digite o objetivo ..."
      options={options}
      getOptionLabel={((options)=>{
        return options.label
      })}
      />
   )}