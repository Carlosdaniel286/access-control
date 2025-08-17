"use client";

// COMPONENTES INTERNOS
import { DatePicker } from "./DatePicker";
import { InputMask } from "./InputMask";
import { SelectDemo } from "./Select";
import Image from "next/image";
import ButtonAdd from "./ButtonAdd";
import { FormHeader } from "./FormHeader";
import { Autocomplete } from "./AutoComplete";
import { FocusOverlay } from "./FocusOverlay";

// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/types/dialogProps";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useOverlay } from "@/contexts/OverlayContext";

// CONSTANTES E TIPOS
import {
  initValueForm,
  optionsAccessAddressResident,
  optionsAccessMode,
  optionsAccessProfile,
  optionsAccessRegistration,
} from "@/constants/accessOptions";
import { AccessAddressResident } from "@/types/valueForm";
import React from "react";

export function DialogContentPerson({ onButtonClick }: DialogProps) {
  const [form, setForm] = useState(initValueForm);
  const { handleOpenOverlay, handleCloseOverlay } = useOverlay();

  return (
    <div
      className="
        bg-white
        flex 
        flex-col 
        pb-10 
        px-2.5
        sm:px-4
        md:rounded-2xl 
        md:shadow-lg
        w-full
        lg:max-w-[1000px]    
        3xl:max-w-[1300px] 
        4xl:max-w-[1400px]
      "
    >
      {/* Cabeçalho */}
      <FormHeader
        title="Cadastro de Visitantes"
        subtitle="Preencha as informações abaixo para cadastrar um novo visitante."
      />

      {/* Formulário */}
      <div className="flex flex-col md:grid grid-cols-3 gap-7">
        {/* Foto */}
        <div className="flex row-span-2 row-start-1 col-start-3 col-span-1">
          <figure className="bg-gray-400 min-h-[140px] w-full max-w-[200px] md:max-w-full relative overflow-hidden h-full rounded-md">
            <Image
              src="/imageForm/imageEx.jpg"
              className="object-cover"
              alt="Profile"
              sizes="100%"
              fill
            />
          </figure>
        </div>

        {/* Nome completo */}
        <FocusOverlay>
          <div className="h-[77px] col-span-2 col-start-1 row-start-1">
            <InputMask
              className="w-full"
              label="nome completo"
              placeholder="Digite o nome completo"
              mask={/^[a-zA-Z\s]*$/}
            />
          </div>
        </FocusOverlay>

        {/* CPF */}
        <FocusOverlay>
          <div className="h-[77px] row-start-3 col-start-3">
            <InputMask
              mask="000.000.000-00"
              label="CPF"
              placeholder="Digite o CPF"
            />
          </div>
        </FocusOverlay>

        {/* Endereço do morador */}
        <FocusOverlay>
          <div className="col-span-2 row-start-2 col-start-1">
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
        </FocusOverlay>

        {/* Data */}
        <FocusOverlay>
          <div className="row-span-3 col-start-1 row-start-3 sm:max-w-[250px]">
            <DatePicker />
          </div>
        </FocusOverlay>

        {/* Categoria de visita */}
        <div className="h-[77px] col-start-3 row-start-4">
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

        {/* Tipo de registro */}
        <div className="row-start-6 col-start-3 py-4">
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

        {/* Tipo de acesso */}
        <div className="h-[77px] col-start-3 row-start-5">
          <SelectDemo
            className="h-[55px]"
            label="Tipo de acesso"
            placeholder="tipo de acesso"
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

        {/* Observações */}
        <div className="h-[60px] mt-2.5 col-start-1 row-start-6 flex justify-center sm:justify-normal">
          <ButtonAdd
            className="w-full sm:w-auto md:text-[0.86rem] lg:text-[1rem]"
            setIsOpen={() => handleOpenOverlay("textArea")}
          />
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-6 px-3.5 flex justify-between items-center gap-4">
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
