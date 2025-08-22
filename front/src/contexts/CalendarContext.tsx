
'use client'

import { differenceInDays, startOfDay,addDays } from "date-fns";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";

type CalendarContextType = {
  startDate: Date;
  endDate: Date;
  
};

type CalendarType = "startDate" | "endDate"

interface CalendarContextProps {
  updateDate: CalendarContextType;
  handleDateCalendar: (type: CalendarType, date: Date) => void;
  differenceInDay: number
  addDate: (days: number) => void
}

export const CalendarContext = createContext<CalendarContextProps | undefined>(undefined);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [updateDate, setUpdateDate] = useState<CalendarContextType>({
    startDate: new Date(),
    endDate: new Date(),
    
    
  });
   
  
  const handleDateCalendar = (type: CalendarType, date: Date) => {
    if(type==='startDate'){
      if(date>updateDate.endDate){
         setUpdateDate(prev => ({ ...prev, ['endDate']: date }));
      }
    }
    setUpdateDate(prev => ({ ...prev, [type]: date }));
  };

    const differenceInDay = useMemo(() => {
    return differenceInDays(
      startOfDay(updateDate.endDate),
      startOfDay(updateDate.startDate)
    );
  }, [updateDate.startDate, updateDate.endDate]);

     const addDate=(days:number)=>{
       const diff = addDays(startOfDay(updateDate.startDate),days)
       handleDateCalendar('endDate',diff)
    }
 
  
  
  
  
    return (
    <CalendarContext.Provider value={{ updateDate, handleDateCalendar, differenceInDay,addDate }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("useCalendar must be used within a CalendarProvider");
  return context;
};
