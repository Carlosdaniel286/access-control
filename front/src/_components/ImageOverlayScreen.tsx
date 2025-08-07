
'use client'
import Image from "next/image";
import { Overlay } from "./Overlay";
import { useState } from "react";
import clsx from 'clsx';

type ImageOverlayScreenProps = {
  src?: string;
  className?: string;
}

export function ImageOverlayScreen({ src, className }: ImageOverlayScreenProps) {
  const [openOverlay, setOpenOverlay] = useState(false);

  return (
    // O div que contém a imagem em seu estado original (fechado)
    <div
       onClick={((event)=>{
        event.stopPropagation();
       
       })}
      className={clsx(
        'relative',
        className
      )}
    >
      <Image
        onClick={(()=>{
          setOpenOverlay(true)
        })}
        src={src || "/imageForm/imageEx.jpg"}
        alt="Imagem de perfil"
        className="object-cover rounded-full"
        fill
        sizes="100%"
        priority
      />

      {/* Renderiza o Overlay apenas quando openOverlay é true */}
      {openOverlay && (
        <Overlay
          onClick={() => setOpenOverlay(false)} // Clicar no fundo fecha
          setIsOpen={(()=>{
            setOpenOverlay(false)
          })} 
         >
          <div
           onClick={((event)=>{
           setOpenOverlay(false)
           event.stopPropagation();
           })}
            className={clsx(
              'relative',
              'h-[300px] w-[300px] max-w-[95vw] sm:h-[500px] sm:w-[500px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]'
            )}
           >
            <Image
              src={src || "/imageForm/imageEx.jpg"}
              className="object-cover"
              alt="Profile"
              fill
              sizes="100%"
              priority
            />
          </div>
        </Overlay>
      )}
    </div>
  );
}