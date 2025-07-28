import { Label } from '@/components/ui/label';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import { SxProps } from '@mui/joy/styles/types/theme';




export type HouseSearchAutocompleteProps<T extends { id: number | string }> = {
    sx?: SxProps;
    options?: T[];
    getOptionLabel?: (option: T) => string;
    placeholder?: string;
    label?: string;
    getValue?: (value: T | null | string) => void;
    freeSolo?: boolean;
    disabled?: boolean 
  };

export function InputSearch<T extends { id: number | string }>({ sx, options, disabled, getOptionLabel, placeholder ,label,getValue,freeSolo}: HouseSearchAutocompleteProps<T>) {
  const capitalize = (text?: string): string => {
    if (!text) return "Digite algo";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

 

  return (
    <div className="flex flex-col gap-2">
    <Label  className="text-transform: uppercase" >{label}</Label>
   
    <Autocomplete
    //value={value}
    slotProps={{
        clearIndicator: {
          sx: {
            position: "absolute",
            left: "85%",
            
          },
        },
        root: {
          sx: {
            position: "relative",
            padding: "6px",
            border: "2px solid #d1d5dc",
            '&:hover': {
             border: "2px solid transparent",
              boxShadow: "0 0 0 3px #000000",
            },
            '--Input-focusedThickness': '0rem',
            '&:focus-within': {
              borderColor: "transparent",
              boxShadow: "0 0 0 3px #000000",
            },
            height:'100%',
            ...sx,
          },
        },
        listbox: {
          disablePortal: true,
        },
      }}
      
      
      placeholder={capitalize(placeholder)}
      options={options??[]}
      
      getOptionLabel={((option)=>{
         if(typeof option =='string') return option
        if(!getOptionLabel) return ''
        return getOptionLabel(option)
      })}
      freeSolo={freeSolo}
      disabled={disabled}
      onInputChange={(event, newInputValue) => {
        getValue?.(newInputValue)
        }}
      
      onChange={(ev,value)=>{
       getValue?.(value)
     
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option) => (
        <AutocompleteOption {...props} key={option.id}>
          {getOptionLabel?.(option)}
        </AutocompleteOption>
      )}
      aria-label={placeholder ? capitalize(placeholder) : "Buscar"}
    />
    </div>
  );
}
