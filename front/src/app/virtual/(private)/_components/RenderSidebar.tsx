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
      <div className="hidden min-w-[270px] max-w-[90vw] h-full sm:block">
         <Sidebar />
      </div>
    </div>
  );
}
