
import { DialogProps } from "@/app/types/dialogProps";
import { Box } from "./Box";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";
import { InputMask } from "./InputMask";


export function DialogVehicleContent({onButtonClick}:DialogProps){
  const [api,setApi]=useState<CarouselApi | undefined>(undefined)

  useEffect(()=>{
  if(!onButtonClick) return
  setApi(onButtonClick())
  },[onButtonClick])
 return (
    <div
       className="
       bg-white sm:max-w-[800px]
        p-10 rounded-lg 
        shadow-lg
        "
       >
      <header className="mb-6">
        <h2 className="text-lg font-semibold">Cadastro de veiculos</h2>
        <p className="text-sm text-gray-500">
          Preencha as informações abaixo para cadastrar um novo veiculo.
        </p>
      </header>
      
     <div>
      <Box gridArea="vehiclePlate">
       <InputMask />
      </Box>
       <Box gridArea="vehicleColor">
        <InputMask 
          label="Cor do veiculo"
        />
      </Box>
       <Box gridArea="vehicleModel">
        <InputMask 
          label="Modelo do veiculo"
        />
      </Box>

     </div>
     <div className="flex w-full justify-between items-center">
    <ArrowLeft absoluteStrokeWidth 
    onClick={(()=>{api?.scrollPrev()})}
     className="bg-gray-400 hover:bg-black  cursor-pointer rounded-sm" 
      height={40} width={50} 
      color="white" 
    />
    <Button className="cursor-pointer uppercase" type="submit">Cadastrar</Button>
    </div>
    </div>
  );
}