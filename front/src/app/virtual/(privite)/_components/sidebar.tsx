'use client'

import { WorkerIcon } from "@/icons/user";
import { Car, House, UserPlus, Users} from "lucide-react";

import Link from "next/link";
import { OpenRegister } from "./openRegister";
import { useState } from "react";




export function Sidebar() {
  const strokeWidth = 1.7
  const [isOpen,setIsOpen]=useState(false)
  
   
  
  return(
        <aside
          className="
            w-full
            max-w-[270px]
          bg-white
            h-full
            flex
            flex-col
            gap-1
            pt-4
           "
          >
         
          { isOpen && <OpenRegister  isOpen={isOpen} setIsOpen={setIsOpen}/>}
       
          <Link 
            href="/virtual/painel" 
            className="widgets">
             <House  strokeWidth={strokeWidth} aria-hidden="true" />
             <span>Home</span>
          </Link>
         
          <button 
            className="widgets"
             onClick={() => setIsOpen(true)}
            >
             
            <UserPlus strokeWidth={strokeWidth} />
            <span>Cadastrar</span>
          </button>

          <button 
            className="widgets">
            <Users 
             strokeWidth={strokeWidth} 
              //color="#3e9392"
              className=" hover:stroke-[#3e9392]"
            />
            <span>Visitantes</span>
          </button>
         
           <button className="widgets">
               <WorkerIcon  className=" hover:stroke-[#3e9392]"/>
             <span>Prestadores</span>
          </button>
          <button className="widgets">
               <Car  strokeWidth={strokeWidth} />
          <span>Veiculos</span>
          </button>
          
      </aside>
    )

}
//import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
 
