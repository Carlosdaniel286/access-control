'use client'

import { OverlayProps } from "@/app/types/overlayProps";
import { cn } from "@/lib/utils";

//flex justify-center items-center

export function Overlay({ children,setIsOpen,className}: OverlayProps) {

 const hidden = () => {
  setIsOpen?.(false)
}
 return (
    <div onClick={hidden}  className={cn(
        "fixed inset-0 bg-black/50 flex justify-center items-center  z-0",
        className
      )}>
      <div  onClick={(e) => {
    e.stopPropagation()
    }}>{children}</div>
    </div>
  );
}