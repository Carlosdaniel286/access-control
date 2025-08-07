import { Label } from "@/components/ui/label";
import { Textarea as Text } from '@mui/joy';
import { ChangeEvent,  useState } from "react";


export function Textarea() {
  

  const [value, setValue] = useState('');
  const [hasSpace, setHasSpace] = useState(false);
  

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  const input = event.target.value;

  // Limite de caracteres
  if (input.length > 915) return;

  const lastChar = input[input.length - 1];
  const endedWithSpace = lastChar === ' ';
  setHasSpace(endedWithSpace);

  // Se for o primeiro caractere ou se o caractere anterior foi espaço,
  // deve capitalizar o último caractere digitado
  if (hasSpace || input.length === 1) {
    const chars = input.split('');
    const lastIndex = chars.length - 1;

    // Capitaliza o último caractere
    chars[lastIndex] = chars[lastIndex].toUpperCase();

    const formattedText = chars.join('');
    return setValue(formattedText);
  }

  setValue(input);
};

  return (
    <div className="flex w-full flex-col gap-2">
      <Label className="px-1 uppercase p-4">escreva uma observação</Label>
      <Text
        size="md"
        value={value}
        onChange={handleChange}
        sx={{
            border:'none',
            textTransform:'capitalize'

        }}
        slotProps={{
          root: {
            sx: {
            '--Textarea-focusedThickness': '0rem',
             border:'none',
             width:'100%',
             background:'white',
             boxShadow: '0',
             color:'black',
             textTransform:'capitalize'
          },
          input:{
            textTransform:'capitalize'
          }
          },
        }}
        color="neutral"
        disabled={false}
        minRows={15}
        variant="soft"
        placeholder="Escreva Uma Observação"
      />
    </div>
  );
}
