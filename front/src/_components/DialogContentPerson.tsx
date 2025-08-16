"use client";

// COMPONENTES INTERNOS

import { Box } from "./Box";
import { DatePicker } from "./DatePicker";
import { InputMask } from "./InputMask";
import { SelectDemo } from "./Select";
import Image from "next/image";

// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/types/dialogProps";
import { ArrowRight } from "lucide-react";
import {  useState } from "react";

import {
  initValueForm,
  optionsAccessAddressResident,
  optionsAccessMode,
  optionsAccessProfile,
  optionsAccessRegistration,
} from "@/constants/accessOptions";

import ButtonAdd from "./ButtonAdd";
import { useOverlay } from "@/contexts/OverlayContext";
import { AccessAddressResident } from "@/types/valueForm";
import { FormHeader } from "./FormHeader";
import React from "react";
import { Autocomplete } from "./AutoComplete";

export function DialogContentPerson({ onButtonClick }: DialogProps) {
  const [form, setForm] = useState(initValueForm);
  const { handleOpenOverlay, handleCloseOverlay } = useOverlay();



  return (
    //scrollbar-thin
      <div className="
      bg-white
       flex 
       flex-col 
       pb-10 
       px-1
       sm:px-5  
       md:rounded-lg 
       md:shadow-lg
       w-full
       sm:max-w-[98vw]   
       lg:max-w-[1100px]    
       3xl:max-w-[1300px] 
       4xl:max-w-[1400px]
       
       ">
       {/* Cabeçalho */}
        <FormHeader
          title="Cadastro de Visitantes"
          subtitle="Preencha as informações abaixo para cadastrar um novo visitante."
        />

        {/* Formulário */}
        <div
          className="
            flex flex-col gap-8 h-full  
            md:grid md:grid-cols-3 
            md:gap-8
            md:[grid-template-rows:repeat(5,77px)_auto_auto]
          "
        >
          {/* Imagem */}
          <div className="flex md:flex-row-reverse md:col-start-3   md:row-start-1 md:row-span-2">
            <figure className="bg-gray-400 min-h-[140px] w-[100%] max-w-[160px]  md:max-w-[200px]  relative overflow-hidden h-full rounded-md">
              <Image
                src="/imageForm/imageEx.jpg"
                className="object-cover"
                alt="Profile"
                sizes="100%"
                fill
              />
            </figure>
          </div>

          {/* Nome Completo */}
          <Box className="h-[77px] md:col-span-2 md:row-start-1">
            <InputMask
              className="inputMask"
              label="nome completo"
              placeholder="Digite o nome completo"
              mask={/^[a-zA-Z\s]*$/}
            />
          </Box>

          {/* CPF */}
          <Box className="h-[77px] md:col-start-3 md:row-start-3">
            <InputMask
              mask="000.000.000-00"
              label="CPF"
              placeholder="Digite o CPF"
            />
          </Box>

          {/* Endereço do Morador */}
          <Box className="h-[77px] md:col-span-2 md:row-start-2">
            <Autocomplete
              label="Endereço do morador"
              optionsItem="label"
              placeholder="Digite o endereço ou nome do morador..."
              options={optionsAccessAddressResident}
              getValue={(value: AccessAddressResident | null | string) => {
                if (typeof value !== "string") return;
              }}
              
            />
          </Box>

          {/* Categoria de Visita */}
          <Box className="h-[77px] md:col-start-3 md:row-start-4">
            <SelectDemo
            className="h-[55px]"
              placeholder="categoria da visita"
              label="Categoria de visita"
              options={optionsAccessProfile}
              getOptionLabel={(option) => {
                const { id, label, value } = option;
                return { id, label, value };
              }}
            />
          </Box>

          {/* Data */}
          <Box className="md:col-span-2 md:row-start-3 md:row-span-3">
            <DatePicker />
          </Box>

          {/* Observação */}
          <Box className="max-h-[60px] md:col-span-2 md:row-start-6 md:row-span-2">
            <ButtonAdd
              setIsOpen={() => {
                handleOpenOverlay("textArea");
              }}
            />
          </Box>

          {/* Tipo de Registro */}
          <Box className="items-start py-4 md:col-start-3 md:row-start-5">
            <SelectDemo
             className="h-[55px]"
              label="Tipo de registro"
              placeholder="tipo de registro"
              options={optionsAccessRegistration}
              getOptionLabel={(option) => {
                const { id, label, value } = option;
                return { id, label, value };
              }}
            />
          </Box>

          {/* Tipo de Acesso */}
          <Box className="items-end h-[77px] md:col-start-3 md:row-start-7">
            <SelectDemo
            className="h-[55px]"
              label="Tipo de acesso"
              placeholder=" tipo de acesso"
              options={optionsAccessMode}
              getOptionLabel={(option) => {
                setForm((prev) => ({
                  ...prev,
                  accessMode: option,
                }));
                return null;
              }}
            />
          </Box>
        </div>

        {/* Rodapé */}
        <footer className="mt-6 flex justify-between items-center gap-4">
          <Button
            className="cursor-pointer uppercase"
            type="button"
            variant="outline"
            onClick={() => handleCloseOverlay("register")}
          >
            Cancelar
          </Button>

          {form.accessMode?.value !== "veiculo" &&
          form.accessMode?.value !== "passageiro" ? (
            <Button className="cursor-pointer uppercase" type="submit">
              Cadastrar
            </Button>
          ) : (
            <ArrowRight
              absoluteStrokeWidth
              className="bg-gray-400 hover:bg-black cursor-pointer rounded-sm"
              height={40}
              width={50}
              color="white"
              onClick={onButtonClick}
            />
          )}
        </footer>
      </div>
    
  );
}
