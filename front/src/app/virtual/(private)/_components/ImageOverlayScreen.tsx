
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
    
    const styles ={
    image: `min-w-full min-h-full relative rounded-md overflow-hidden ${className}`,
    imageOverlay: ` md:w-[100%] z-9999  rounded-md`
  }
   const isOpendOverlay = openOverlay ? styles.imageOverlay : styles.image;
   
   return(
        <div 
             onClick={(()=>{
              console.log('clicou na imagem')
             })}
             className=" min-h-[130px] h-full w-full  flex justify-center overflow-hidden relative"
              style={{ gridArea: "image" }}>
              < Overlay 
              
              onClick={(()=>{
                setOpenOverlay(!openOverlay);
              })}
                setIsOpen={(()=>{
                  setOpenOverlay(!openOverlay);
                })}
                isOpen={openOverlay}
                overlay={openOverlay} 
               className={`bg-gray-400 ${isOpendOverlay} `}>
                 <Image src={src||""}
                  className=" object-cover mx-auto"
                  alt="Profile" 
                  fill 
                  //sizes="100%"
                  priority
                  
                  />
              </Overlay>
    
            </div>
    
  )
}}