
'use client'
// COMPONENTES INTERNOS
import {type CarouselApi} from "@/components/ui/carousel";
import { InputAddressSearch } from "./InputAddressSearch";
import { Box } from "./Box";
import { InputCpf } from "./InputCpf";
import { InputAccessProfileOption } from "./InputAccessProfileOption";
import { InputAccessMode } from "./InputAccessMode";
import { DatePicker } from "./DatePicker";
import { InputName } from "./InputName";
//AccessMode
// COMPONENTES EXTERNOS / UI
import { Button } from "@/components/ui/button";
import { DialogProps } from "@/app/types/dialogProps";
import { ArrowRight} from "lucide-react";
import { useEffect, useState } from "react";
import { InputAccessRegistration } from "./InputAccessRegistration";
import { initValueForm } from "@/constants/accessOptions";



export function DialogContentPerson({ onButtonClick}: DialogProps) {
  const[form, setForm]=useState(initValueForm)
  const [api,setApi]=useState<CarouselApi | undefined>(undefined)

  useEffect(()=>{
  if(!onButtonClick) return
  setApi(onButtonClick())
  
  },[onButtonClick])

  
  return (
    <div draggable='false' className="bg-white sm:max-w-[800px] p-10 rounded-lg shadow-lg">
      
      {/* Cabeçalho */}
      <header className="mb-6">
        <h2 className="text-lg font-semibold">Cadastro de Visitantes</h2>
        <p className="text-sm text-gray-500">
          Preencha as informações abaixo para cadastrar um novo visitante.
        </p>
      </header>

      {/* Formulário */}
      <div
        className="grid gap-4 bg-white"
        style={{
          gridTemplateAreas: `
            "fullName fullName cpf"
            "address address accessCategory"
            "datePicker datePicker accessType"
            "datePicker datePicker acessRegistration"
          `,
          gridTemplateRows: "auto auto auto 200px"
        }}
      >
        <Box gridArea="fullName">
          <InputName />
        </Box>

        <Box gridArea="cpf">
          <InputCpf />
        </Box>

        <Box gridArea="address">
          <InputAddressSearch />
        </Box>

        <Box gridArea="accessCategory">
          <InputAccessProfileOption />
        </Box>

        <Box gridArea="datePicker">
          <DatePicker />
        </Box>
         
        <Box className="items-end h-[73px]" gridArea="accessType">
          <InputAccessMode 
          //sx={{ minHeight: "49.6px" }} 
          getValue={((accessMode)=>{
           setForm((prev)=>({...prev,accessMode}))
          })}
          />
        </Box>
         <Box className="items-start py-4" gridArea="acessRegistration">
          <InputAccessRegistration  />
        </Box>
      </div>

      {/* Rodapé */}
      <footer className="mt-6 flex justify-between items-center gap-4">
        <Button 
        className="cursor-pointer uppercase" 
        type='button' 
        variant="outline"
        
        >Cancelar</Button>
        
        {form.accessMode?.value!=='veiculo' ? (
        <Button className="cursor-pointer uppercase" type="submit">Cadastrar</Button>
        ):(
       
        <ArrowRight absoluteStrokeWidth 
        className="bg-gray-400 hover:bg-black  cursor-pointer rounded-sm" 
        height={40} width={50} 
        color="white" 
        onClick={(()=>{
          
          api?.scrollNext()
        
        })}
        />
       
        )}
        
      </footer>
    </div>
  );
}
