
import { Button } from "@/components/ui/button";
import { Overlay } from "./Overlay";
import { Textarea } from "./TextArea";
 type RenderProps ={
 setIsOpen?: ((open: boolean) => void) | undefined
 }

export function RenderTextarea({setIsOpen}:RenderProps) {
   return(
    <Overlay 
    className="z-999 "
       setIsOpen={(()=>{
         setIsOpen?.(false)
       })}
       >
        <div  className="bg-white w-[95vw] sm:w-[600px]  rounded-sm ">
        <Textarea/>
         <div className="px-7 py-4 flex  justify-between">
            <Button 
             onClick={(()=>{
              setIsOpen?.(false)
             })}
            className= "bg-gray-200 text-[20px] hover:text-white cursor-pointer text-black">Cancelar</Button>
            <Button 
             onClick={(()=>{
               setIsOpen?.(false)
             })}
            className=" bg-black hover:text-white cursor-pointer px-7 text-[20px]">Enviar</Button>
         </div>
        </div>
    </Overlay>
   )
}