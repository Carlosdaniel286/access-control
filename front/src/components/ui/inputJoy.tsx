import * as React from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
type StyleProps = React.HTMLAttributes<HTMLInputElement>
type inputValidation ={
   placeholder:string
   className?:StyleProps | string | undefined
   type:string
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
   onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined
   value?: string | number | readonly string[] | undefined
}


export default function InputValidation({className,placeholder,type,onChange,onKeyDown,value}:inputValidation) {
  return (
    <Stack spacing={2}>
     
      <FormControl error>
        <FormLabel>Label</FormLabel>
        <Input 
        className={`${className}`} 
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        //defaultValue="Oh no, error found!" 
        
        />
        <FormHelperText>
          <InfoOutlined />
          Opps! something is wrong.
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}
