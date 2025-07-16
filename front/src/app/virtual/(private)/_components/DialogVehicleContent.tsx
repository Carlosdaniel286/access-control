
import { DialogProps } from "@/app/types/dialogProps";
import { BaseInput } from "./BaseInput";
import { Box } from "./Box";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";


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
        <BaseInput
          label="Placa do veiculo"
        />
      </Box>
       <Box gridArea="vehicleColor">
        <BaseInput
          label="Cor do veiculo"
        />
      </Box>
       <Box gridArea="vehicleModel">
        <BaseInput
          label="Modelo do veiculo"
        />
      </Box>

     </div>
     <div className="flex w-full justify-between items-center">
    <ArrowLeft absoluteStrokeWidth 
    onClick={(()=>{api?.scrollPrev()})}
     className="bg-gray-300 hover:bg-red-500 cursor-pointer rounded-sm" 
      height={40} width={50} 
      color="#000000" 
    />
    <Button className="cursor-pointer uppercase" type="submit">Cadastrar</Button>
    </div>
    </div>
  );
}