
"use client";

// COMPONENTES INTERNOS
import { type CarouselApi } from "@/components/ui/carousel";

import { Box } from "./Box";
import { DatePicker } from "./DatePicker";
import { InputMask } from "./InputMask";
import { SelectDemo } from "./Select";
import Image from "next/image";

// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/app/types/dialogProps";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  initValueForm,
  optionsAccessAddressResident,
  optionsAccessMode,
  optionsAccessProfile,
  optionsAccessRegistration
} from "@/constants/accessOptions";
import ButtonAdd from "./ButtonAdd";
import { useOverlay } from "@/contexts/OverlayContext";
import { InputSearch } from "./InputSearch";
import { AccessAddressResident } from "@/app/types/valueForm";

export function DialogContentPerson({ onButtonClick }: DialogProps) {
  const [form, setForm] = useState(initValueForm);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const { handleOpenOverlay, handleCloseOverlay } = useOverlay();
//max-h-[100px] max-w-[100px]
  


 useEffect(() => {
    if (!onButtonClick) return;
    setApi(onButtonClick());
  }, [onButtonClick]);

  return (
    <div className="bg-white max-h-[100vh] sm:max-h-[96vh]  px-2 py-5 relative sm:px-10 overflow-x-auto sm:rounded-lg shadow-lg">
      {/* Cabeçalho */}
      <header className="mb-6 flex py-3 justify-between gap-4 sm:gap-6 sm:mb-8">
        <div>
          <h2 className="text-lg font-semibold">Cadastro de Visitantes</h2>
          <p className="text-sm text-gray-500">
            Preencha as informações abaixo para cadastrar um novo visitante.
          </p>
        </div>
      </header>

      {/* Formulário */}
      <div
        className="md:grid flex h-full flex-col gap-8"
        style={{
          gridTemplateAreas: `
            "fullName fullName image"
            "address address image"
            "date date cpf"
            "date date category"
            "date date registration"
            "note note registration"
            "note note accessType"
          `,
          gridTemplateRows: "repeat(5, 77px) auto auto auto",
        }}
      >
        <div className="flex md:flex-row-reverse"
          style={{ gridArea: "image" }}>
          <div className="bg-gray-400 min-h-[140px] w-[40%] relative overflow-hidden md:w-[70%] h-full rounded-md">
             <Image src="/imageForm/imageEx.jpg"
              className=" object-cover"
              alt="Profile" 
                fill />
          </div>

        </div>
        <Box className='h-[77px]' gridArea="fullName">
          <InputMask
            className="capitalize inputMask"
            label="Nome completo"
            placeholder="Digite o nome completo"
            mask={/^[a-zA-Z\s]*$/}
          />
        </Box>
         <Box className='h-[77px]' gridArea="cpf">
          <InputMask
            mask="000.000.000-00"
            label="CPF"
            placeholder="Digite o CPF"
          />
        </Box>

        <Box className='h-[77px]' gridArea="address">
          <InputSearch
            label="Endereço do morador"
            placeholder="Digite o endereço ou nome do morador..."
            options={optionsAccessAddressResident}
            getValue={(value: AccessAddressResident | null | string) => {
              if (typeof value !== "string") return;
            }}
            getOptionLabel={(option) => option.label}
          />
        </Box>

        <Box className='h-[77px]' gridArea="category">
          <SelectDemo
            placeholder="Escolha a categoria da visita"
            label="Categoria de visita"
            options={optionsAccessProfile}
            getOptionLabel={(option) => {
              const { id, label, value } = option;
              return { id, label, value };
            }}
          />
        </Box>

        <Box gridArea="date">
          <DatePicker />
        </Box>

        <Box className="max-h-[60px]" gridArea="note">
          <ButtonAdd
            setIsOpen={() => {
              handleOpenOverlay("textArea");
            }}
          />
        </Box>

        <Box className="items-end h-[77px]" gridArea="accessType">
          <SelectDemo
            sx={{ height: "58px" }}
            label="Tipo de acesso"
            placeholder="Selecione o tipo de acesso"
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

        <Box className="items-start py-4" gridArea="registration">
          <SelectDemo
            sx={{ height: "58px" }}
            label="Tipo de registro"
            placeholder="Selecione o tipo de registro"
            options={optionsAccessRegistration}
            getOptionLabel={(option) => {
              const { id, label, value } = option;
              return { id, label, value };
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
            onClick={() => api?.scrollNext()}
          />
        )}
      </footer>
    </div>
  );
}
