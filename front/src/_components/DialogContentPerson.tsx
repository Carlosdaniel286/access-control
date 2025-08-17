"use client";

// COMPONENTES INTERNOS
import { DatePicker } from "./DatePicker";
import { InputMask } from "./InputMask";
import { SelectDemo } from "./Select";
import Image from "next/image";

// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/types/dialogProps";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
    <div className="
      bg-white
      flex 
      flex-col 
      pb-10 
      px-2
      md:rounded-2xl 
      md:shadow-lg
      w-full
      lg:max-w-[1000px]    
      3xl:max-w-[1300px] 
      4xl:max-w-[1400px]
    ">
      {/* Cabeçalho */}
      <FormHeader
        title="Cadastro de Visitantes"
        subtitle="Preencha as informações abaixo para cadastrar um novo visitante."
      />

      {/* Formulário */}
      <div className=" flex  flex-col-reverse lg:flex-row ">
        
        <div className="flex-1 gap-6  p-4 flex flex-col">
          <div className="h-[77px] ">
            <InputMask
              className="w-[100%]"
              label="nome completo"
             placeholder="Digite o nome completo"
              mask={/^[a-zA-Z\s]*$/}
              
            />
          </div>

          <div className="h-[77px]">
            <Autocomplete
              label="Endereço do morador"
              optionsItem="label"
              placeholder="Digite o endereço ou nome do morador..."
              options={optionsAccessAddressResident}
              getValue={(value: AccessAddressResident | null | string) => {
                if (typeof value !== "string") return;
              }}
            />
          </div>

          <div className=" sm:max-w-[250px]">
            <DatePicker />
          </div>

          <div className="h-[60px] flex justify-center sm:justify-normal ">
            <ButtonAdd
            className="w-full sm:w-auto  "
              setIsOpen={() => handleOpenOverlay("textArea")}
            />
          </div>
        </div>

        <div className=" lg:w-[27%] flex flex-col gap-6 p-3.5">
          <div className="flex md:flex-row-reverse">
            <figure className="bg-gray-400 min-h-[140px] w-[100%] max-w-[160px] md:max-w-[200px] relative overflow-hidden h-full rounded-md">
              <Image
                src="/imageForm/imageEx.jpg"
                className="object-cover"
                alt="Profile"
                sizes="100%"
                fill
              />
            </figure>
          </div>

          <div className="h-[77px] ">
            <InputMask
              mask="000.000.000-00"
              label="CPF"
              placeholder="Digite o CPF"
            />
          </div>

          <div className="h-[77px]">
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
          </div>

          <div className="items-start py-4">
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
          </div>

          <div className="h-[77px]">
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
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-6 px-3.5 flex  justify-between items-center gap-4">
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
