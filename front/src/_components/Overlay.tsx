'use client'

import { OverlayProps } from "@/types/overlayProps";
import { cn } from "@/lib/utils";

//flex justify-center items-center

export function Overlay({ children, setIsOpen, className, overlay = true, onClick }: OverlayProps) {

  const hidden = () => {
    setIsOpen?.()
    }

  const overStyle = "fixed inset-0 bg-black/50 z-999 flex justify-center cursor-default items-center"
  const isOverlay = overlay == true ? overStyle : "";


  return (
    <div onClick={hidden} className={cn(
      isOverlay,
      className
    )}>
      <div className=" " onClick={(e) => {
        onClick?.()
        console.log('cilcou')
        e.stopPropagation()
      }}>{children}</div>
    </div>
  );
}