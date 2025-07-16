// src/hooks/use-form-error.ts
import { useState } from "react";

type FormError= {
  hasError: boolean;
  message: string;
}

export function useFormError() {
   const [formInfo, setFormInfo] = useState<FormError>({
    hasError: false,
    message: '',
  });
  
  const handleError = (hasError:boolean ,message = '') => {
     setFormInfo((prev)=>({
      ...prev,
      hasError: hasError,
      message: message,
    }));
  };

  return{handleError, formInfo};
 
}