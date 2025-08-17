'use client'
import { FormHeader } from "./FormHeader";
import { Button } from "@/components/ui/button";

import { Box } from "./Box";
import { Autocomplete } from "./AutoComplete";
export function SearchFilter() {
  return (
   
    <article className="bg-white  overflow-y-auto px-1.5 py-6  md:px-4 md:py-3 flex flex-col  w-[100dvw]   max-h-[96%]   md:overflow-x-hidden     md:max-w-[700px] md:rounded-md">
      <FormHeader
        title="Pesquisa Avançada"
        subtitle="Filtre os dados por critérios personalizados."
      />
      <form action="" className="grid gap-5">
        <div className="flex flex-col md:grid grid-cols-2  gap-4">
          <Box className="h-[77px] col-span-2 gap-4">
            <Autocomplete  
             options={[{id: '',label:'oii',ben:'ooo'}]}
             optionsItem="ben"          
             
             />
          </Box>

          <Box className="h-[77px] gap-4">
            <Autocomplete  label="Senha" placeholder="Buscar por senha" />
          </Box>

          <Box className="h-[77px] gap-4">
            <>
              <Autocomplete 
               
              label="CPF" placeholder="Buscar por CPF" />
            </>
          </Box>

          <Box className="h-[77px] gap-4">
            <Autocomplete label="Endereço" placeholder="Buscar por endereço" />
          </Box>

          <Box className="h-[77px] gap-4">
            <Autocomplete label="Placa" placeholder="Buscar por placa" />
          </Box>
          <Box className="h-[77px] col-span-2 gap-4">
            <Autocomplete label="Categoria" placeholder="Buscar por categoria" />
          </Box>
        </div>

        <div className="flex py-5 justify-between">
          <Button
            type="button"
            variant="ghost"
            className="capitalize px-6 py-5 bg-gray-300 hover:bg-gray-200 cursor-pointer"
          >
            cancelar
          </Button>
          <Button type="submit" className="capitalize px-6 py-5 cursor-pointer">
            buscar
          </Button>
        </div>
      </form>
    </article>
    
  );
}
