'use client';
import { useOverlay } from "@/contexts/OverlayContext";
import { Sidebar } from "./Sidebar";
import { AnimatePresence } from "framer-motion";

export function RenderSidebar() {
  const { overlays } = useOverlay();

  return (
    <div>
    <AnimatePresence mode="wait">
      {overlays.sideBar && <Sidebar />}
      </AnimatePresence>
      <div className="hidden min-w-[200px] max-w-[90vw] min-h-[100vh] swap:block">
         <Sidebar />
      </div>
    </div>
  );
}
