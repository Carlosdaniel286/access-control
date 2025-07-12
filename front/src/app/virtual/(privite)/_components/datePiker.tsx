'use client'
import { useState } from "react";
import { CalendarDemo } from "./calendar";
import { InputDatePiker } from "./inputDatePiker";


export function DatePiker() {
 
  const[date,setDate]=useState({
    dateStart:new Date(),
    dateEnd:new Date(),
    totalDays:0
  })
  
  
  return(
    <div className="gap-3  flex flex-col max-w-[250px] ">
        <CalendarDemo 
        label="Date inicial"
        dateType='start'
        totalDays={date.totalDays}
        getDateStart={((ev)=>{
          setDate((prev)=>({...prev,dateStart:ev}))
        })}
        />
        <CalendarDemo
        dateType='end'
        label="Data final"
         totalDays={date.totalDays}
         getDateEnd={((ev)=>{
          setDate((prev)=>({...prev,dateEnd:ev}))
         })}
        />
        
        <InputDatePiker
         startDate={date.dateStart}
         endDate={date.dateEnd}
         countDay={((ev)=>{

         setDate((prev)=>({...prev,totalDays:ev}))
         })}
        />
    </div>
  )
}