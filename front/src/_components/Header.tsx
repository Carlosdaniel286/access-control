'use client';

import { useOverlay } from "@/contexts/OverlayContext";
import { AlignJustify } from "lucide-react";

import { memo, useCallback } from "react";

export const Header = memo(function Header() {
  const { handleOpenOverlay } = useOverlay();
 
  const handleMenuClick = useCallback(() => {
    handleOpenOverlay("sideBar");
  }, [handleOpenOverlay]);

  return (
    <header
      className="
        bg-slate-950
        flex items-center
        min-h-24 max-h-24
        px-6
      "
    >
      <button
        type="button"
        onClick={handleMenuClick}
        className="bg-gray-200 p-1 cursor-pointer rounded-md visible swap:invisible"
        aria-label="Abrir menu lateral"
      >
        <AlignJustify
          size={32}
          color="#0a0a0a"
          strokeWidth={2.5}
        />
      </button>

      
    </header>
  );
});
