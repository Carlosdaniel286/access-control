'use client'
import { Button } from "@/components/ui/button";
import { Overlay } from "./Overlay";
import { useState } from "react";
import { cn } from "@/lib/utils";
type FocusOverlayProps={
 children: React.ReactNode
  className?:string,
  disableScreenEnd?:boolean;
}

export function FocusOverlay({children,className,disableScreenEnd=true}:FocusOverlayProps) {
   const [activeOverlay, setActiveOverlay] =useState(false)
   const [active, setActive] = useState(false);
   
   return (
   activeOverlay ? (
      <Overlay
     className=""
     setIsOpen={(()=>{
         setActiveOverlay(false)
     })}
      >
      <article  className={cn(
        "flex  w-screen h-[93vh]  p-2",
         active?'items-end':'items-center ',className
      )}>
        <div onClick={(()=>{
        if(disableScreenEnd) return
         setActive(true)
      })} className={cn(
        "bg-white   px-4 w-full py-3 rounded-lg  "     )}>
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
     <div className={cn("block sm:hidden h-full",className)} onClick={(()=>{
        setActiveOverlay(true)
    })}>{children}</div>
     <div className={cn("hidden h-full  sm:block",className)}>{children}</div>
    </>
  )
)
}