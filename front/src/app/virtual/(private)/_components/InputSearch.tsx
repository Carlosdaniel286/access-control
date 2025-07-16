

import { Label } from '@/components/ui/label';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import { SxProps } from '@mui/joy/styles/types/theme';

interface HouseSeachAutocompleteProps<T extends { id: number | string }> {
  sx?: SxProps;
  options: T[];
  getOptionLabel: (option: T) => string;
  placeholder?: string
  label?: string;
  getValue?: (value: T | null) => void;
}

export function InputSearch<T extends { id: number | string }>({ sx, options, getOptionLabel, placeholder ,label,getValue}: HouseSeachAutocompleteProps<T>) {
  const capitalize = (text?: string): string => {
    if (!text) return "Digite algo";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="flex flex-col gap-2">
    <Label  className="text-transform: uppercase" >{label}</Label>
    <Autocomplete
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
              boxShadow: "0 0 0 3px #3B82F6",
            },
            '--Input-focusedThickness': '0rem',
            '&:focus-within': {
              borderColor: "transparent",
              boxShadow: "0 0 0 3px #3B82F6",
            },
            ...sx,
          },
        },
        listbox: {
          disablePortal: true,
        },
      }}
      placeholder={capitalize(placeholder)}
      options={options}
      getOptionLabel={getOptionLabel}
      filterOptions={(options, state) => {
        const input = state.inputValue.trim().toLowerCase();
        return options.filter(option =>
          getOptionLabel(option).toLowerCase().includes(input)
        );
      }}
      onChange={((ev,value)=>{
      if (getValue) {
         getValue(value);
       }
     
      })}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option) => (
        <AutocompleteOption {...props} key={option.id}>
          {getOptionLabel(option)}
        </AutocompleteOption>
      )}
      aria-label={placeholder ? capitalize(placeholder) : "Buscar"}
    />
    </div>
  );
}
