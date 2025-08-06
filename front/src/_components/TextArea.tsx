import { Label } from "@/components/ui/label";
import { Textarea as Text } from '@mui/joy';
import { ChangeEvent,  useState } from "react";


export function Textarea() {
  

  const [value, setValue] = useState('');
  
  

  const handleChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = ev.target.value;
    if(newValue.length>915) return
    console.log(newValue.length)
   // if (bloquearDigito) return; // impede digitação extra
    setValue(newValue);
  };
  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="px-1 uppercase p-4">escreva uma observação</Label>
      <Text
        size="md"
        value={value}
        onChange={handleChange}
        sx={{
            border:'none'
        }}
        slotProps={{
          root: {
            sx: {
            '--Textarea-focusedThickness': '0rem',
             border:'none',
             width:'100%',
             background:'white',
             boxShadow: '0',
             color:'black'
          },
          },
        }}
        color="neutral"
        disabled={false}
        minRows={15}
        variant="soft"
        placeholder="escreva uma observação"
      />
    </div>
  );
}
