'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useMemo } from "react";
import { useRef,  useEffect} from "react";

type CarouselApi = {
  onApiReady?: (api: {
    scrollToNext: () => void;
    scrollToPrev: () => void;
  }) => void;
  showButtons?: boolean;
  children?: React.JSX.Element[] | React.JSX.Element;
  onClickOvelay?: ()=>void;
  className?:string
};

export function Carousel({ onApiReady, showButtons = true, children,onClickOvelay,className }: CarouselApi) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToNext = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollToPrev = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (onApiReady) {
      onApiReady({
        scrollToNext,
        scrollToPrev,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const items = useMemo(() =>  React.Children.toArray(children), [children]);
  

  return (
   
      <section
        ref={containerRef}
        aria-label="Carousel de diálogos"
        className={cn(
          "mx-auto w-screen  flex items-center justify-center",
          "scroll-smooth overflow-hidden snap-x snap-mandatory",
          className
        )}
      >
        <div role="group" aria-label="Slides do carrossel" className="flex  w-full">
          {items.map((DialogComponent, index) => (
            <article
              key={index}
              aria-labelledby={`dialog-heading-${index}`}
              className={cn(
                "w-full  flex-shrink-0 overflow-x-hidden snap-center",
                "overflow-y-auto  max-h-[calc(100vh-2rem)]"
              )}
            >
              <div onClick={((ev)=>{
                 if(ev.target === ev.currentTarget){
                  onClickOvelay?.()
                }
              
              })} className="w-full  overflow-hidden flex items-center justify-center md:p-4">
                {DialogComponent}
              </div>
            </article>
          ))}
        </div>

        {showButtons && (
          <nav className="absolute inset-0 flex items-center justify-between ">
            <Button
              onClick={scrollToPrev}
              className="pointer-events-auto ml-4"
              aria-label="Slide anterior"
              variant="secondary"
              size="icon"
              type="button"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={scrollToNext}
              className="pointer-events-auto mr-4"
              aria-label="Próximo slide"
              variant="secondary"
              size="icon"
              type="button"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </nav>
        )}
      </section>
    
  );
}
