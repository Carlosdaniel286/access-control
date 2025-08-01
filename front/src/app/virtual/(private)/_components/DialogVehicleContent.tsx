'use client'
import { DialogProps } from "@/app/types/dialogProps";
import { Box } from "./Box";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {  use, useEffect, useState } from "react";
import { CarouselApi } from "@/components/ui/carousel";
import { InputMask } from "./InputMask";
import { brandsCar,modelCar,motorcycleBrands,motorcycleModels,vehicleColors,vehicleTypes } from "@/constants/vehicleOptions";
import { InputSearch } from "./InputSearch";
import { userPromise} from "./A";

type VehicleCharacteristics = {
  color: string | null;
  plate: string | null;
  model: string | null;
  type: string | null;
  brands: string | null;
};




export function DialogVehicleContent({onButtonClick}:DialogProps){
  const [api,setApi]=useState<CarouselApi | undefined>(undefined)
   //const [render,setRender]=useState<string | undefined>(undefined)
  
 
  const [vehicleCharacteristics,setVehicleCharacteristics] = useState<VehicleCharacteristics>({
    color:null,
    plate:null,
    model:null,
    type:null,
    brands:null
  })
  
  useEffect(()=>{
  if(!onButtonClick) return
  setApi(onButtonClick())
  },[onButtonClick])
 
  
  
  const isVehicleType = vehicleCharacteristics.type==null?true:false
  const vehicleType  = vehicleCharacteristics.type==null?'Veículo':vehicleCharacteristics.type
  
  const brandsPromise = use(userPromise);

   console.log(brandsPromise)
  
  
  return (
    <div
      className="
       bg-white 
        min-h-[100vh]
        sm:min-h-[100%]
        p-10 
        sm:rounded-lg 
        shadow-lg
        max-h-[100vh] 
        overflow-auto
        "
       >
      <header className="mb-6">
        <h2 className="text-lg font-semibold">Cadastro de veiculos</h2>
        <p className="text-sm text-gray-500">
          Preencha as informações abaixo para cadastrar um novo veiculo.
        </p>
      </header>
      
     <div 
     className="
         flex
         input-h
         flex-col
         sm:grid 
         gap-4
         h-full
         
         "
     style={{
          gridTemplateAreas: `
            "vehiclePlate vehicleType"
            "vehicleBrands vehicleBrands"
            "vehicleModel vehicleModel"
            "vehicleColor vehicleColor"
          `,
          gridTemplateRows: "repeat(4, 80px) auto"
        }}
     
     >
     <Box   gridArea="vehiclePlate" >
       <InputMask 
       
       className="min-h-[58px]"
       textMode='uppercase'
       label="placa de veiculo"
       placeholder="Placa"
       value={vehicleCharacteristics.plate??""}
       onAccept={((ev)=>{
        setVehicleCharacteristics(prev => ({
       ...prev,
       plate:ev.toUpperCase()
     }))

       })}
       mask={[
    {
     mask:'aaa0a00',  // Placa antiga
       
    },
    {
      
     mask:'aaa-0000'
      //regex: /^[A-Z]{3}\d[A-Z]\d{0,2}/,
    },
  ]}
       
       />
     
      </Box>
      <Box className='h-[77px]' gridArea="vehicleType" >
        <InputSearch
          label="tipo do veiculo"
           freeSolo={true}
            placeholder="tipo do veiculo"
          options={vehicleTypes}
          
          getValue={((ev)=>{
            if(!ev) return
           const type = typeof ev=='string'? ev:ev.name
           setVehicleCharacteristics(prev => ({
          ...prev,
           type
     }))
          })}
           getOptionLabel={((options) => {
              return options.name
            })}
        />
      </Box>
       <Box className='h-[77px]'  gridArea="vehicleBrands">
       <InputSearch
          label="marca do veiculo"
          freeSolo={true}
          disabled={isVehicleType}
          placeholder={`marca do/da ${vehicleType}`}
          options={vehicleCharacteristics.type!=='Moto'?brandsCar:motorcycleBrands}
           getOptionLabel={((options) => {
              return options.name
            })}
        />
      </Box>
       <Box className='h-[77px]' gridArea="vehicleModel">
       <InputSearch
          label="Modelo do veiculo"
          disabled={isVehicleType}
           freeSolo={true}
          placeholder={`Modelo do/da ${vehicleType}`}
          options={vehicleCharacteristics.type!=='Moto'?modelCar:motorcycleModels}
           getOptionLabel={((options) => {
              return options.name
            })}
        />
        
      </Box>
      
       <Box className='h-[77px]' gridArea="vehicleColor">
       <InputSearch
          label="Cor do veiculo"
          freeSolo={true}
          placeholder={`cor do/da ${vehicleType}`}
          options={vehicleColors}
           getOptionLabel={((options) => {
              return options.name
            })}
        />
      </Box>
      
      

     </div>
     <div className=" h-32 flex w-full justify-between items-end">
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