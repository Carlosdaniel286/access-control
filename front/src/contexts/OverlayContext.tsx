'use client'
import React, { createContext, useState, use } from "react";

type OverlayState = {
  register: boolean;
  textArea: boolean;
  sideBar:boolean
};

type OverlayContextType = {
 overlays: OverlayState;
 handleOpenOverlay: (select: SelectOverlay) => void
 handleCloseOverlay: (select: SelectOverlay) => void
};
type SelectOverlay = 'register'| 'textArea' | 'sideBar'
const OverlayContext = createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [overlays, setOverlays] = useState<OverlayState>({
    register: false,
    textArea: false,
    sideBar:false
  });

   const handleOpenOverlay = (select: SelectOverlay) => {
    setOverlays(prev => ({ ...prev, [select]: true }));
  };

  const handleCloseOverlay = (select: SelectOverlay) => {
    setOverlays(prev => ({ ...prev, [select]: false }));
  };

   
 
  return (
    <OverlayContext value={{ overlays ,handleOpenOverlay,handleCloseOverlay}}>
      {children}
    </OverlayContext>
  );
}

export function useOverlay() {
  const context = use(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within OverlayProvider");
  }
  return context;
}
