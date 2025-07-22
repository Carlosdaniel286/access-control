// src/hooks/use-form-error.ts
import { useState, useCallback } from "react";

type FormError = {
  hasError: boolean;
  message: string;
};

export function useFormError() {
  const [formInfo, setFormInfo] = useState<FormError>({
    hasError: false,
    message: '',
  });

  const handleError = useCallback((hasError: boolean, message = '') => {
    setFormInfo(prev => ({
      ...prev,
      hasError,
      message,
    }));
  }, []);

  return { handleError, formInfo };
}

  
 
