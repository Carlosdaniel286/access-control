import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
 type PropsButtonAdd ={
    setIsOpen?: ((open: boolean) => void) | undefined
    open?: boolean
 }

export default function ButtonAdd({setIsOpen,open}:PropsButtonAdd) {
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
