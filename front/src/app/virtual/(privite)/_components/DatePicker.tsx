'use client'
import { useState } from "react";
import { CalendarDemo } from "./Calendar";
import { InputDatePicker } from "./InputDatePicker";


export function DatePicker() {
 
  const[date,setDate]=useState({
    dateStart:new Date(),
    dateEnd:new Date(),
    totalDays:0,
    valueDay:0
  })
  
  
  return(
    <div className="gap-3  flex flex-col max-w-[250px] ">
        <CalendarDemo 
        label="Date inicial"
        dateType='start'
        totalDays={date.totalDays}
        startDate={date.dateStart}
        endDate={date.dateEnd}
        getDateStart={((ev)=>{
          setDate((prev)=>({...prev,dateStart:ev}))
        })}
        />
        <CalendarDemo
        dateType='end'
        label="Data final"
         startDate={date.dateStart}
         endDate={date.dateEnd}
         totalDays={date.totalDays}
         valueDay={date.valueDay}
         getDateEnd={((ev)=>{
          setDate((prev)=>({...prev,dateEnd:ev}))
         })}
        />
        
        <InputDatePicker
         startDate={date.dateStart}
         endDate={date.dateEnd}
         onChange={((day)=>{
           setDate((prev)=>({...prev,valueDay:day}))
         })}
         countDay={((ev)=>{
          setDate((prev)=>({...prev,totalDays:ev}))
         })}
        />
    </div>
  )
}