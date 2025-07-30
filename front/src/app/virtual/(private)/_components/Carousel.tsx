'use client';
import {
  Carousel as ShadCarousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { CarouselProps } from "@/app/types/carouselProps";

export function Carousel({ children, onCarouselApi }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const[indexItem, setIndexItem]= useState(0)
  
  useEffect(() => {
    if (api && onCarouselApi) {
      onCarouselApi(api);
   }
   if(api){
    api.on('select',()=>{
      setIndexItem(api.selectedScrollSnap())
      
     
    })
   }
    return () => {
    api?.off("select", (()=>{
      setIndexItem(api.selectedScrollSnap())
    })); // limpa listener
  };
  }, [api, onCarouselApi]);


  //sm:max-w-[600px]
  
  return (
    <ShadCarousel
    
      className="w-full md:max-w-[800px] sm:max-w-[90vw] max-w-[100vw]  mx-auto z-50"
      setApi={setApi}
      opts={{
        dragFree: false,
        containScroll:"keepSnaps",
        watchDrag: false,  // Esta é a chave para desativar completamente o arraste
      }}
    >
      <CarouselContent 
        className="flex items-center">
        {children.map((child, index) => (
          <CarouselItem key={index}>
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" hidden sm:flex items-center justify-center mt-6">
        <Pagination 
        indexItem={indexItem}
        />
      </div>
    </ShadCarousel>
  );
}