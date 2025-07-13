//069.374.291-77
'use client'

import { useState } from "react"



export function InputCpf() {
    const [cpf, setCpf] = useState('')

    const handleClearDate = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;
        if (key === 'Backspace') {

            return;
        }

        const isDigit = /^\d$/.test(key);
        if (!isDigit) {
            e.preventDefault();
            return;
        }
    };

    const handleCpfInput = (input: string) => {
        if (input.length > 14) return;

        const digits = input.replace(/[.-]/g, "");

        const parts = {
            first: digits.slice(0, 3),
            second: digits.slice(3, 6),
            third: digits.slice(6, 9),
            fourth: digits.slice(9, 11),
        };

        const separators = {
            second: parts.second ? "." : "",
            third: parts.third ? "." : "",
            fourth: parts.fourth ? "-" : "",
        };

        const formattedCpf =
            `${parts.first}${separators.second}${parts.second}` +
            `${separators.third}${parts.third}` +
            `${separators.fourth}${parts.fourth}`;


        setCpf(formattedCpf);
    };



    return (
        <div>
            <input
                aria-label="Campo de CPF"
                value={cpf}
                onChange={((ev) => {
                    handleCpfInput(ev.target.value)
                })}
                onKeyDown={handleClearDate}
                className="input p-2"
                id="2"
                type="text"
                name="cpf"
                placeholder="Digite o cpf..." />
        </div>
    )


}
