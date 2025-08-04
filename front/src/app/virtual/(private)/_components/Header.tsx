'use client';
import { useOverlay } from "@/contexts/OverlayContext";
import { AlignJustify} from "lucide-react";
//
export function Header() {
 const { handleOpenOverlay} = useOverlay();
  
 return(
        <header 
          className="
          bg-slate-950
            flex
            items-center
            min-h-24
            max-h-24
            p-0
            m-0
            px-6
            "
        >
        <div 
        onClick={(()=>{
          console.log('clicou no header')
          handleOpenOverlay('sideBar')
        })}
        className="bg-gray-200 p-1 cursor-pointer rounded-md visible swap:invisible"
        ><AlignJustify 
          size={32} 
           color="#0a0a0a" 
           strokeWidth={2.5} 
            />
           </div>
           

        </header>
    )

}



