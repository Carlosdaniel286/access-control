
'use client';
import { Dialog } from "@/components/ui/dialog";
import { Overlay } from "./Overlay";
import { Carousel } from "./Carousel";
import { DialogVehicleContent } from "./DialogVehicleContent";
import { DialogContentPerson } from "./DialogContentPerson";
import { CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { OpenRegisterProps } from "@/types/OpenRegister";



export function OpenRegister({ isOpen, setIsOpen }: OpenRegisterProps) {
  const [api, setApi] = useState<CarouselApi>(undefined);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form action="">
        <Overlay
          setIsOpen={setIsOpen}
          overlay={true}
        >
          <Carousel
            onCarouselApi={(api) => {
              setApi(api);

            }}
          >
            <DialogContentPerson
              onButtonClick={() => api}
            //textButton="Proximo"
            />
            <DialogVehicleContent
              onButtonClick={() => api}
            //textButton="Retornar"
            />
          </Carousel>
        </Overlay>
      </form>
    </Dialog>
  );
}
