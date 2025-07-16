'use client'

import { useEffect, useState } from "react";
import { BaseInput } from "./BaseInput";



export function InputName({getValue}: {getValue?: (value: string) => void}) {
    const[valueInput, setValueInput] = useState<string>("");
    
    useEffect(()=>{
        if (getValue) {
            getValue(valueInput);
        }
    },[getValue, valueInput]);
    
    
    return (
        <div>
            <BaseInput
                ariaLabel="Campo de nome"
                value={valueInput}
                label='Nome completo'
                onChange={((ev)=>{setValueInput(ev.target.value)})}
                inputKind="letters"
                type="text"
                name="name"
                placeholder="Digite o nome completo..."
            />
        </div>
    );
}
