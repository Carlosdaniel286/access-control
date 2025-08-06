import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
 type PropsButtonAdd ={
    setIsOpen?: ((open: boolean) => void) | undefined
    
 }

export default function ButtonAdd({setIsOpen}:PropsButtonAdd) {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button 
      className='capitalize' 
      onClick={(()=>{
        setIsOpen?.(true)
      })}
      startDecorator={<Add />}>adcione uma observação</Button>
    </Box>
  );
}
