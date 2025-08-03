
'use client'
import Image from "next/image";
import { Overlay } from "./Overlay";
import { useState } from "react";

type ImageOverlayScreenProps = {
  src?:string
  className?: string;
}
///imageForm/imageEx.jpg

export function ImageOverlayScreen({src,className}:ImageOverlayScreenProps){ {
    const [openOverlay, setOpenOverlay] = useState(false)
    
   
   
   return(
          < Overlay 
           className="cursor-pointer"
              onClick={(()=>{
                setOpenOverlay(!openOverlay);
              })}
                setIsOpen={(()=>{
                  setOpenOverlay(!openOverlay);
                })}
                
                isOpen={openOverlay}
                overlay={openOverlay} 
               >
                 <div className={` ${openOverlay?'h-[300px] max-w-[95vw]':'h-[100%] w-[100%]'} ${openOverlay?'sm:h-[500px] w-[500px]':'h-[100%] w-[100%]'}   relative ${className} `}>
                 <Image src={src||""}
                  className={`object-cover ${openOverlay?'':'rounded-full'}`}
                  alt="Profile" 
                  fill 
                  sizes="100%"
                  priority
                  
                  />
               </div>
              </Overlay>
  )
}}