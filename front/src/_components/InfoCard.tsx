'use client'

import { ImageOverlayScreen } from "./ImageOverlayScreen"
import { Overlay } from "./Overlay"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import KeyIcon from '@mui/icons-material/Key';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Button } from "@/components/ui/button";

type InfoCardProps ={
    onClick?: () => void;
}


export function InfoCard({onClick}:InfoCardProps){

 
    return(
    <Overlay
    setIsOpen={onClick}
    >
       <article className="bg-white flex flex-col p-2 w-[100vw] h-screen sm:h-[526px] sm:max-w-[600px] sm:rounded-md">
        <header className="flex items-center  border-b-2 border-gray-200 gap-4">
            <figure>
            <ImageOverlayScreen
                src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg"
                className=" h-[80px] w-[80px] m-2 bg-amber-400 max-h-[400px] max-w-[400px]  flex rounded-full  "
            />
            {/* <figcaption>Legenda da imagem</figcaption> se quiser */}
            </figure>
            <h2 className="capitalize font-semibold  text-[1.2rem]">daniela lisa mendes</h2>
        </header>

   <section className="p-4 flex flex-col gap-3 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        <PersonIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Registro:</span>
        <span className="capitalize">morador</span>
      </div>

      <div className="flex items-center gap-2">
        <CalendarMonthIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Início de registro:</span>
        <span>22/11/2023</span>
      </div>

      <div className="flex items-center gap-2">
        <LocationOnIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Endereço:</span>
        <span className="capitalize">Rua das Palmeiras, nº 45, Jardim América</span>
      </div>

      <div className="flex items-center gap-2">
        <PhoneIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Telefone:</span>
        <span>(62) 9 9999-9999</span>
      </div>

      <div className="flex items-center gap-2">
        <BadgeIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">CPF:</span>
        <span>***.456.789-00</span>
      </div>

      <div className="flex items-center gap-2">
        <KeyIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Senha de acesso:</span>
        <span>308</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <DriveEtaIcon className="text-gray-500" />
          <span className="font-semibold text-gray-600">Veículos:</span>
        </div>
        <ul className="ml-8 list-disc">
          <li>Honda Civic – Preto – ABC1D23</li>
          <li>CG 160 Fan – Vermelha – XYZ9K88</li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <VerifiedUserIcon className="text-gray-500" />
        <span className="font-semibold text-gray-600">Status:</span>
        <span className="text-green-600 font-medium">Ativo</span>
      </div>
    </section>
       <section className="flex h-full items-center justify-center sm:justify-start  sm:flex-row-reverse px-4 py-3">
        <Button onClick={onClick} className="cursor-pointer text-[1.3rem] px-4 w-40 py-4">Sair</Button>
       </section>
    </article>

    
    </Overlay>
     

 )
}