'use client'

import { OverlayProps } from "@/types/overlayProps";
import { cn } from "@/lib/utils";

//flex justify-center items-center

export function Overlay({ children, setIsOpen, className, overlay = true, onClick }: OverlayProps) {

  const hidden = () => {
    setIsOpen?.(false)
  }

  const overStyle = "fixed inset-0 bg-black/50 z-999 flex justify-center items-center"
  const isOverlay = overlay == true ? overStyle : "";


  return (
    <div onClick={hidden} className={cn(
      isOverlay,
      className
    )}>
      <div  onClick={(e) => {
        onClick?.(e)
        e.stopPropagation()
      }}>{children}</div>
    </div>
  );
}