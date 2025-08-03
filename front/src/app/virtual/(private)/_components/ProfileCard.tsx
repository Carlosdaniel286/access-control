'use client'

import { ImageOverlayScreen } from "./ImageOverlayScreen";
//bg-gray-800 
export function ProfileCard() {
  return (
    <div className=" grid min-w-[400px] bg-white w-full p-1.5 shadow-md rounded-lg gap-3"
     style={{
      gridTemplateAreas: `
      "divImg name"
      "divImg name"
    `,
      gridTemplateColumns:'auto 2fr',
      gridTemplateRows: 'auto 100px',
    }}
    >
      <div style={{gridArea:'divImg'}} className="  flex sm:items-center  sm:justify-center overflow-hidden   " >

        <ImageOverlayScreen
         src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg"
         className="min-w-[100px] min-h-[100px] md:min-w-[125px] md:min-h-[125px] lg:min-w-[150px] lg:min-h-[150px] "
         
        />
      </div>
       
      <div style={{gridArea:'name',
       gridTemplateAreas: `
      "header header header"
      "tag tag tag"
      "info info info"
      
    `,
      gridTemplateColumns:'100px 100px',
      gridTemplateRows: 'auto auto',

      }} 
      className="grid p-3 ">
       <header style={{gridArea:'header'}} ><h3 className="text-[1rem] sm:text-lg lg:text-[1.3rem] font-semibold capitalize mb-6">Daniela mendes lisa</h3></header>

    <div className="sm:flex grid grid-cols-2 gap-5  justify-around sm:flex-col text-[0.9rem] md:text-[1rem] lg:text-[1.05rem] " style={{ gridArea: 'tag' }}>
  {/* Cabeçalhos */}
  <div className="sm:grid grid-cols-6 flex  flex-col gap-4">
    <span className="text-gray-500">Categoria</span>
    <span className="text-gray-500">Fluxo</span>
    <span className="text-gray-500">Momento</span>
    <span className="text-gray-500">hora</span>
    <span className="text-gray-500">Locomoção</span>
    <span className="text-gray-500">Endereço</span>
  </div>

  {/* Valores */}
  <div className="sm:grid grid-cols-6  flex flex-col gap-4">
    <strong className="font-semibold">visitante</strong>
    <strong className="font-semibold">saída</strong>
    <strong className="font-semibold">31/07/2025</strong>
    <strong className="font-semibold">11:00</strong>
    <strong className="font-semibold">carro</strong>
    <strong className="font-semibold">casa - 02</strong>
  </div>
</div>
 
   
   
    </div>
     </div>
  );
}





