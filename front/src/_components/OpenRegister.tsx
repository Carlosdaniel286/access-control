'use client';
import  {DialogVehicleContent } from "./DialogVehicleContent";
import   {DialogContentPerson } from "./DialogContentPerson";
import { useCallback, useState } from "react";
import { Carousel } from "./Carousel";
import { useOverlay } from "@/contexts/OverlayContext";
import { Overlay } from "./Overlay";

export function OpenRegister() {
  const { handleCloseOverlay } = useOverlay();
  const [api, setApi] = useState({
    scrollToNext: () => {},
    scrollToPrev: () => {}
});

  
const handleApiReady = useCallback((api: {
    scrollToNext: () => void;
    scrollToPrev: () => void;
}) => {
    setApi(api);
   
  }, []);


return (
    <Overlay>
     <form action="">
        <Carousel
        className="bg-white md:bg-transparent"
         onClickOvelay={(()=>{
          handleCloseOverlay("register")
        })}
        showButtons={false}
         onApiReady={((apis)=>{
          handleApiReady(apis)
        })} 
       >
           <DialogContentPerson
           onButtonClick={api.scrollToNext}
           />
          <DialogVehicleContent
           onButtonClick={api.scrollToPrev}
          />
        </Carousel>
      </form>
   </Overlay>
  );
}
