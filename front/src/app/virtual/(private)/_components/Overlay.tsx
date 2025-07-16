'use client'

import { OverlayProps } from "@/app/types/overlayProps";



export function Overlay({ children,setIsOpen}: OverlayProps) {

 const hidden = () => {
  setIsOpen?.(false)
}
 return (
    <div onClick={hidden} className="fixed inset-0 bg-black/50  flex  justify-center items-center z-50">
      <div  onClick={(e) => {
    e.stopPropagation()
    }}>{children}</div>
    </div>
  );
}