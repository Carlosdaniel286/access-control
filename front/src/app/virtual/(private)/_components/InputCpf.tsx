'use client';

import { useEffect, useState } from "react";
import { BaseInput } from "./BaseInput";

export function InputCpf({getValue}: {getValue?: (value: string) => void}) {
  const [cpf, setCpf] = useState('');

   useEffect(()=>{
          if (getValue) {
              getValue(cpf);
          }
      },[getValue, cpf]);
  
  
  const handleCpfInput = (input: string) => {
    if (input.length > 14) return;

    const digits = input.replace(/[.-]/g, '');

    const parts = {
      first: digits.slice(0, 3),
      second: digits.slice(3, 6),
      third: digits.slice(6, 9),
      fourth: digits.slice(9, 11),
    };

    const separators = {
      second: parts.second ? '.' : '',
      third: parts.third ? '.' : '',
      fourth: parts.fourth ? '-' : '',
    };

    const formattedCpf =
      `${parts.first}${separators.second}${parts.second}` +
      `${separators.third}${parts.third}` +
      `${separators.fourth}${parts.fourth}`;

    setCpf(formattedCpf);
  };

  return (
    <div>
      <BaseInput
        name="cpf"
        type="text"
        value={cpf}
        label="CPF"
        ariaLabel="Campo de CPF"
        placeholder="Digite o CPF..."
        inputKind="numbers"
        allowedKeys={['Backspace']}
        onChange={(ev) => handleCpfInput(ev.target.value)}
      />
    </div>
  );
}
