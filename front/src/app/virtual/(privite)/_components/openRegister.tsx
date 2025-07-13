import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { InputAddressSearch } from "./InputAddressSearch";
import { Box } from "./Box";
import { InputCpf } from "./InputCpf";
import { InputVisitCategory } from "./InputVisitCategory";
import { InputAccessType } from "./InputAccessType";
import { DatePicker } from "./DatePicker";


type OpenRegisterProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;

};




export function OpenRegister({ isOpen, setIsOpen }: OpenRegisterProps) {

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <form >

        <DialogContent className="sm:max-w-[800px]  ">
          <DialogHeader>
            <DialogTitle>Cadastro</DialogTitle>
            <DialogDescription>
              faça o cadastro de vistantes e prestadores
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 "
            style={{
              gridTemplateAreas: `
            "nome nome cpf"
            "adress adress visitType"
            "datePiker datePiker accessType "
           `,
            }}
          >
            <Box gridArea="nome" label="nome completo">
              <input className="input p-2" id="1" type="text" name="name" placeholder="Digite o nome completo..." />
            </Box>

            <Box gridArea="cpf" label="cpf">
              <InputCpf />
            </Box>

            <Box gridArea="adress" label="endereço do morador ou nome">
              <InputAddressSearch />
            </Box>

            <Box gridArea="visitType" label="CATEGORIA DE ACESSO" >
              <InputVisitCategory />
            </Box>

            <Box className='' gridArea="datePiker" label="escolha a data de liberação">
              <DatePicker />
            </Box>

            <Box className='  items-end h-[73px]' gridArea="accessType" label="TIPO DE ACESSO">
               <InputAccessType sx={{ minHeight: "49.6px" }} />
            </Box>


          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}


