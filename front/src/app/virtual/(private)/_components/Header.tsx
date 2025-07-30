'use client';
import { useOverlay } from "@/contexts/OverlayContext";
import { AlignJustify} from "lucide-react";
//
export function Header() {
 const { handleOpenOverlay} = useOverlay();
  
 return(
        <header 
          className="
          bg-black
            flex
            items-center
            h-24
            p-0
            m-0
            px-6
            "
        >
        <div 
        onClick={(()=>{
          handleOpenOverlay('sideBar')
        })}
        className="bg-gray-200 p-1 rounded-md visible sm:invisible"
        ><AlignJustify 
           size={32} 
           color="#0a0a0a" 
           strokeWidth={2.5} 
           className=" cursor-pointer" />
           </div>
           <h1 className="text-white"></h1>
        
        </header>
    )

}



