
'use client'

import { BaseInputProps } from "@/app/types/baseInput";
import { BaseInput } from "./BaseInput";
import { ChangeEvent, useState } from "react";

//ABC1D23  JKT-3456

type CharMask ={
  char:"letter"|'number' | null | 'character',
  index?:number
  
}

type CharInsertion = {
  index: number;
  char: string;
};
export function VehiclePlate ({}:BaseInputProps){
   const[inputValue,setInputValue]=useState('')
   const [mask] = useState('000.000.000-00');
  

 const getExpectedCharType = (char: string): CharMask => {
  if (/^[a-zA-Z]$/.test(char)) return { char: 'letter' }
  if (/^[0-9]$/.test(char)) return { char: 'number' }
  
  if(/^[.,!?;:()\[\]{}'"“”‘’\-—_…]$/.test(char)) return {char:'character'}

  return { char: null }
}

 const findAllIndexOf = (
  item: string[] | string, 
  searchFor: string | RegExp
): CharInsertion[] => {
  const arr = typeof item === 'string' ? item.split('') : item;
  const result: CharInsertion[] = [];

  arr.forEach((ev, i) => {
    if (searchFor instanceof RegExp) {
      if (searchFor.test(ev)) result.push({index:i,char:ev});
    } else {
      if (ev === searchFor) result.push({index:i,char:ev});
    }
  });

  return result;
};

  
const insertCharacters = (
  input: string,
  insertions: CharInsertion | CharInsertion[]
): string => {
  
  const insertionList = Array.isArray(insertions) ? insertions : [insertions];
  const characters = input.split('');
  const lastIndex = characters.length - 1;
 
  insertionList.forEach(({ index, char }) => {
    if(lastIndex == index){
      const previousItem = characters[index]
      characters[index]=char
      characters.push(previousItem)
    }
   });
  
  return characters.join('');
};

  
const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
  const input = ev.currentTarget.value.trim()
  
  const punctuationRegex = /^[.,!?;:()\[\]{}'"“”‘’\-—_…]$/;
  const indexOfMask = findAllIndexOf(mask,punctuationRegex)
  
  let currentIndex = input.length-1
  if(indexOfMask.some((ev)=>ev.index==currentIndex)) currentIndex++

  const lastTypedChar = input.charAt(input.length-1)
  const expectedCharAtIndex = mask.charAt(currentIndex)
  
  const expectedType = getExpectedCharType(expectedCharAtIndex)
  const actualType = getExpectedCharType(lastTypedChar)
 
  const isValidLetter = expectedType.char === 'letter' && actualType.char === 'letter'
  const isValidNumber = expectedType.char === 'number' && actualType.char === 'number'
  
  if (isValidLetter || isValidNumber) {
    const value = insertCharacters(input,indexOfMask)
    setInputValue(value)
  
  }
 
}
   
  return(
    <BaseInput
     label='placa do veiculo'
      onChange={handleInputChange}
      onKeyDown={((ev)=>{
        console.log(ev?.key)
        if(ev?.key=='Backspace'){
          setInputValue('')
          
        }
      })}
      allowedKeys={['Backspace']}
      value={inputValue}
      inputKind={null}
    />
   )
}