import { FormHeader } from "./FormHeader";
import { Button } from "@/components/ui/button";
import { AutocompleteInput } from "./AutocompleteInput";
import { Box } from "./Box";
//import { InputMask } from "./InputMask";

export function SearchFilter() {
  return (
    <article className="bg-white px-4 flex flex-col py-1 w-[100vw] h-[100vh] max-h-screen overflow-x-hidden overflow-y-auto md:max-h-[500px] md:max-w-[700px] md:rounded-md">
      <FormHeader
        title="Pesquisa Avançada"
        subtitle="Filtre os dados por critérios personalizados."
      />
      <form action="" className="grid gap-5">
        <div className="flex flex-col md:grid grid-cols-2  gap-4">
          <Box className="h-[77px] col-span-2 gap-4">
            <AutocompleteInput label="Nome" placeholder="Buscar por nome" />
          </Box>

          <Box className="h-[77px] gap-4">
            <AutocompleteInput label="Senha" placeholder="Buscar por senha" />
          </Box>

          <Box className="h-[77px] gap-4">
            <>
              <AutocompleteInput label="CPF" placeholder="Buscar por CPF" />
            </>
          </Box>

          <Box className="h-[77px] gap-4">
            <AutocompleteInput label="Endereço" placeholder="Buscar por endereço" />
          </Box>

          <Box className="h-[77px] gap-4">
            <AutocompleteInput label="Placa" placeholder="Buscar por placa" />
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
