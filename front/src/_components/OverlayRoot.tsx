"use client";

import { useOverlay } from "@/contexts/OverlayContext";
import React from "react";
import { OpenRegister } from "./OpenRegister";
import { RenderTextarea } from "./RenderTextArea";
import { Overlay } from "./Overlay";
import { SearchFilter } from "./SearchFilter";
import { InfoCard } from "./InfoCard";

export function OverlayRoot() {
  const { overlays, handleCloseOverlay } = useOverlay();
  
 return (
    <>
      {overlays.register && (
        <OpenRegister />
       )}

      {overlays.textArea && (
        <RenderTextarea setIsOpen={() => handleCloseOverlay("textArea")}/>
      )}

      {overlays.searchFilter && (
        <Overlay setIsOpen={() => handleCloseOverlay("searchFilter")}>
          <SearchFilter  />
        </Overlay>
      )}
      {overlays.infoCard && (
          <InfoCard/>
        )}
    </>
  );
}
