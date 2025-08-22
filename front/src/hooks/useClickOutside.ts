'use client'

import {  useEffect, useRef} from 'react';

function useClickOutside (triggerFunction?:()=>void) {
 
 const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
  function handleClickOutside(event?: MouseEvent) {
    if (containerRef.current && !containerRef.current.contains(event?.target as Node)) {
      triggerFunction?.()
    
    }
   }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);

}, [triggerFunction]);



return {containerRef}

};



export default useClickOutside;