import * as React from 'react';
import Add from '@mui/icons-material/Add';
import { cn } from '@/lib/utils';

type PropsButtonAdd = {
  setIsOpen?: (open: boolean) => void;
  className?: string;
};

export default function ButtonAdd({ setIsOpen, className }: PropsButtonAdd) {
  return (
    <button
     type='button'
      onClick={() => setIsOpen?.(true)}
      className={cn(
        "flex items-center justify-center gap-2 uppercase bg-black text-white border-none cursor-pointer rounded-xl px-6 py-3 font-medium transition-colors hover:bg-zinc-800",
        className
      )}
    >
      <Add sx={{ color: '#fff' }} />
      Criar observação
    </button>
  );
}