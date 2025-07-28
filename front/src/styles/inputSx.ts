

export const sharedSx = {
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: 'gray.300',
  py: '10px',
  px: 2,
  color: 'gray.600',
  borderRadius: '6px', // equivalente ao rounded-sm
  width: '100%',
  height: '100%',
  outline: 'none',
  '--Textarea-focusedThickness': '0rem',
  '&:hover': {
    // 'ring' é Tailwind, aqui ignoramos e usamos box-shadow do MUI/Joy
    borderColor: 'transparent',
    boxShadow: '0 0 0 3px black',
  },
  '&:focus': {
    outline: 'none',
  },
};

