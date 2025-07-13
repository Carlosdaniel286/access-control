
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import { SxProps } from '@mui/joy/styles/types/theme';

interface HouseSearchAutocompleteProps<T extends { id: number | string }> {
  sx?: SxProps;
  options: T[];
  getOptionLabel: (option: T) => string;
  placeholder?:string
}

export function InputSearch<T extends { id: number | string }>({sx,options,getOptionLabel,placeholder}:HouseSearchAutocompleteProps<T>){
  const capatlize =(placeholder?:string):string=>{
    if(placeholder===undefined) return "Digite Algo"
   const getLetter = placeholder.charAt(0).toUpperCase()
   return getLetter + placeholder.slice(1)
  }
  
  
  
  return (
    <Autocomplete
      slotProps={{
       clearIndicator:{
         sx:{
          position:"absolute",
          left:'85%',
          },
        },
       
      root:{
          sx:{
           position:"relative",
            padding:'6px',
            border: '2px solid #d1d5dc',
        '&:hover': {
            border: '2px solid transparent',
            boxShadow: '0 0 0 3px #3B82F6',
        },
        '--Input-focusedThickness': '0rem',
        '&:focus-within': {
            borderColor:'transparent',
            boxShadow: '0 0 0 3px #3B82F6',
        },
            ...sx
        }
       },
        listbox: {
          disablePortal: true,
          
        },
      }}
      placeholder={capatlize(placeholder)}
      options={options}
      getOptionLabel={(item) => getOptionLabel(item)}
      filterOptions={(options, state) => {
        const input = state.inputValue.trim().toLowerCase();
       
        return options.filter(option =>
          getOptionLabel(option).toLowerCase().includes(input)
        );
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option) => (
        <AutocompleteOption  {...props} key={option.id}>
          {getOptionLabel(option)}
        </AutocompleteOption>
      )}
    />
  );
}
