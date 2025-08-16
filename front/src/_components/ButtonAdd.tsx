import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';

type PropsButtonAdd = {
  setIsOpen?: (open: boolean) => void;
};

export default function ButtonAdd({ setIsOpen }: PropsButtonAdd) {
  return (
   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button
        variant="solid"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setIsOpen?.(true)}
        sx={{
          textTransform:'uppercase', // mantém capitalização
          backgroundColor: '#000',      // fundo preto
          color: '#fff',                // texto branco
          borderRadius: '12px',         // borda mais arredondada
          px: 3,                        // padding horizontal
          py: 1.5,                      // padding vertical
          '&:hover': {
            backgroundColor: '#222',    // leve efeito de hover
          },
          transition: 'all 0.3s ease',  // suaviza hover
          fontWeight: 500,               // texto levemente mais forte
        }}
      >
        Criar observação
      </Button>
      </Box>
    
  );
}
