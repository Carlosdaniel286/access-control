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
  console.log(window.innerWidth)
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
      className="w-full   max-w-[100vw]  sm:max-w-[98vw]   lg:max-w-[900px]    3xl:max-w-[1000px] 4xl:max-w-[1200px] mx-auto z-50"
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
      <div className=" hidden  items-center justify-center mt-6">
        <Pagination 
        indexItem={indexItem}
        />
      </div>
    </ShadCarousel>
  );
}