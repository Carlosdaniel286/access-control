
'use client'
import Image from "next/image";
import { Overlay } from "./Overlay";
import { useState } from "react";

type ImageOverlayScreenProps = {
  src?:string
  className?: string;
}
///imageForm/imageEx.jpg
import clsx from 'clsx';
export function ImageOverlayScreen({src,className}:ImageOverlayScreenProps){ {
    const [openOverlay, setOpenOverlay] = useState(false)
    
   
   
   return(
          < Overlay 
           className="cursor-pointer "
              onClick={(()=>{
                setOpenOverlay(!openOverlay);
              })}
                setIsOpen={(()=>{
                  setOpenOverlay(!openOverlay);
                })}
                
                isOpen={openOverlay}
                overlay={openOverlay} 
                
               >
                <div
                    className={clsx(
                      openOverlay
                        ? 'h-[300px] w-[300px] max-w-[95vw] sm:h-[500px] sm:w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'
                        :  className, 
                        'relative ',
                         
                      
                    )}
                  >
                 <Image src={src||""}
                  className={`object-cover ${openOverlay?'':'rounded-full'} `}
                  alt="Profile" 
                  fill 
                  sizes="100%"
                  priority
                  
                  />
               </div>
              </Overlay>
  )
}}