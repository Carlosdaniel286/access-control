'use client'

import { DialogProps } from "@/types/dialogProps";
import { Box } from "./Box";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { InputMask } from "./InputMask";
import { brandsCar, modelCar, motorcycleBrands, motorcycleModels, vehicleColors, vehicleTypes } from "@/constants/vehicleOptions";
import { FormHeader } from "./FormHeader";
import { useState } from "react";
import React from "react";
import { Autocomplete } from "./AutoComplete";

type VehicleCharacteristics = {
  color: string | null;
  plate: string | null;
  model: string | null;
  type: string | null;
  brands: string | null;
};

export function DialogVehicleContent({ onButtonClick }: DialogProps) {
  const [vehicleCharacteristics, setVehicleCharacteristics] = useState<VehicleCharacteristics>({
    color: null,
    plate: null,
    model: null,
    type: null,
    brands: null
  });

  const isVehicleType = vehicleCharacteristics.type == null;
  const vehicleType = vehicleCharacteristics.type == null ? 'Veículo' : vehicleCharacteristics.type;

  return (
    <div className="
    bg-white 
    w-screen 
    
    sm:max-w-[98vw]   
    lg:max-w-[900px]    
    3xl:max-w-[1000px] 
    4xl:max-w-[1100px]
    px-1 
    sm:px-3.5 py-5 
    md:rounded-lg 
    md:shadow-lg">
      <FormHeader
        title="Cadastro de veiculos"
        subtitle="Preencha as informações abaixo para cadastrar um novo veiculo."
      />

      {/* GRID PRINCIPAL */}
      <div className=" flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-8 auto-rows-[80px]">
        
        {/* Placa */}
        <Box className="col-span-1 h-[77px]">
          <InputMask
            className=""
            textMode="uppercase"
            label="placa de veiculo"
            placeholder="Placa"
            value={vehicleCharacteristics.plate ?? ""}
            onAccept={(ev) => {
              setVehicleCharacteristics(prev => ({
                ...prev,
                plate: ev.toUpperCase()
              }));
            }}
            mask={[
              { mask: 'aaa0a00' },
              { mask: 'aaa-0000' },
            ]}
          />
        </Box>

        {/* Tipo */}
        <Box className="col-span-1  h-[77px]">
          <Autocomplete
            label="tipo do veiculo"
            freeSolo={true}
            placeholder="tipo do veiculo"
            options={vehicleTypes}
            getValue={(ev) => {
              if (!ev) return;
              const type = typeof ev == 'string' ? ev : ev.name;
              setVehicleCharacteristics(prev => ({
                ...prev,
                type
              }));
            }}
           
          />
        </Box>

        {/* Marca */}
        <Box className="col-span-2 h-[77px]">
          <Autocomplete
            label="marca do veiculo"
            optionsItem='name'
            freeSolo={true}
            disabled={isVehicleType}
            placeholder={`marca do/da ${vehicleType}`}
            options={vehicleCharacteristics.type !== 'Moto' ? brandsCar : motorcycleBrands}
            getValue={(options) => options.name}
          />
        </Box>

        {/* Modelo */}
        <Box className="col-span-2 h-[77px]">
          <Autocomplete
            label="Modelo do veiculo"
            optionsItem='name'
            disabled={isVehicleType}
            freeSolo={true}
            placeholder={`Modelo do/da ${vehicleType}`}
            options={vehicleCharacteristics.type !== 'Moto' ? modelCar : motorcycleModels}
            getValue={(options) => options.name}
          />
        </Box>

        {/* Cor */}
        <Box className="col-span-2 h-[77px]">
          <Autocomplete
            label="Cor do veiculo"
             optionsItem='name'
            freeSolo={true}
            placeholder={`cor do/da ${vehicleType}`}
            options={vehicleColors}
            getValue={(options) => options.name}
          />
        </Box>

      </div>

      {/* Rodapé */}
      <div className="flex w-full justify-between items-center mt-4">
        <ArrowLeft
          absoluteStrokeWidth
          onClick={onButtonClick}
          className="bg-gray-400 hover:bg-black cursor-pointer rounded-sm"
          height={40}
          width={50}
          color="white"
        />
        <Button className="cursor-pointer uppercase" type="submit">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}
