'use client'
import { Button } from "@/components/ui/button";
import { Overlay } from "./Overlay";
import { useState } from "react";

type FocusOverlayProps={
 children: React.ReactNode
 
}

export function FocusOverlay({children}:FocusOverlayProps) {
   const [activeOverlay, setActiveOverlay] =useState(false)
   
   return (
   activeOverlay ? (
    <Overlay
     className="z-[1800] sm:hidden"
     setIsOpen={(()=>{
         setActiveOverlay(false)
     })}
      >
      <article className=" flex items-center  w-screen h-screen  overflow-y-auto p-2">
        <div  className="bg-white  px-4 w-full py-3 rounded-lg">
            {children}
          <div className=" flex  pt-5  flex-row-reverse ">
            <Button onClick={() => {
              setActiveOverlay(false)
            }} className="uppercase cursor-pointer">
              pronto!
            </Button>
          </div>
        </div>
      </article>
    </Overlay>
  ):(
    <>
     <div className="block sm:hidden h-full  " onClick={(()=>{
        setActiveOverlay(true)
    })}>{children}</div>
     <div className="hidden h-full  sm:block">{children}</div>
    </>
  )
)
}