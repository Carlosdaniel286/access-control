
'use client'

// COMPONENTES INTERNOS
import { type CarouselApi } from "@/components/ui/carousel";
import { InputAddressSearch } from "./InputAddressSearch";
import { Box } from "./Box";
import { InputAccessProfileOption } from "./InputAccessProfileOption";
import { DatePicker } from "./DatePicker";

import { InputAccessRegistration } from "./InputAccessRegistration";
import { InputMask } from "./InputMask";
import { SelectDemo } from "./Select";

// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/app/types/dialogProps";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { initValueForm, optionsAccessMode } from "@/constants/accessOptions";
import ButtonAdd from "./ButtonAdd";
import { useOverlay } from "@/contexts/OverlayContext";

export function DialogContentPerson({ onButtonClick }: DialogProps) {
  const [form, setForm] = useState(initValueForm);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const {handleOpenOverlay,handleCloseOverlay} = useOverlay()
  
  useEffect(() => {
    if (!onButtonClick) return;
    setApi(onButtonClick());
  }, [onButtonClick]);

  

  return (
    <div className=" bg-white p-10  max-h-[100vh] overflow-auto sm:rounded-lg shadow-lg">
      {/* Cabeçalho */}
      <header className="mb-6">
        <h2 className="text-lg font-semibold">Cadastro de Visitantes</h2>
        <p className="text-sm text-gray-500">
          Preencha as informações abaixo para cadastrar um novo visitante.
        </p>
      </header>

      {/* Formulário */}
      <div
        className="sm:grid flex h-full   flex-col gap-4 bg-white"
        style={{
          gridTemplateAreas: `
            "fullName fullName cpf"
            "address address accessCategory"
            "datePicker datePicker accessType"
            "datePicker datePicker acessRegistration"
            "textarea textarea textarea"
          `,
          gridTemplateRows: "auto auto auto auto auto",
        }}
      >
        <Box gridArea="fullName">
          <InputMask
            className="capitalize inputMask"
            label="digite o nome completo"
            placeholder="nome completo"
            mask={/^[a-zA-Z\s]*$/}
          />
        </Box>

        <Box gridArea="cpf">
          <InputMask
            mask="000.000.000-00"
            label="cpf"
            placeholder="cpf"
          />
        </Box>

        <Box gridArea="address">
          <InputAddressSearch />
        </Box>

        <Box gridArea="accessCategory">
          <InputAccessProfileOption />
        </Box>

        <Box  gridArea="datePicker">
          <DatePicker />
        </Box>

        <Box gridArea="textarea">
          <>
          
        <ButtonAdd
         setIsOpen={(()=>{
          handleOpenOverlay('textArea')
         })}
        />
        </>
        </Box>

        <Box className="items-end h-[73px]" gridArea="accessType">
          <SelectDemo
            label="Tipo de acesso"
            placeholder="Tipo de acesso"
            options={optionsAccessMode}
            getOptionLabel={(ev) => {
              setForm((prev) => ({
                ...prev,
                accessMode: ev,
              }));
              return null;
            }}
          />
        </Box>

        <Box className="items-start py-4" gridArea="acessRegistration">
          <InputAccessRegistration />
        </Box>
      </div>

      {/* Rodapé */}
      <footer className="mt-6 flex justify-between items-center gap-4">
        <Button
          className="cursor-pointer uppercase"
          type="button"
          variant="outline"
          onClick={() => handleCloseOverlay('register')}
        >
          Cancelar
        </Button>

        {form.accessMode?.value !== 'veiculo' && form.accessMode?.value !== 'passageiro' ? (
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
