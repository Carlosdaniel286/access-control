'use client'

import { ImageOverlayScreen } from "./ImageOverlayScreen";
//bg-gray-800 
export function ProfileCard() {
  return (
    <div className=" grid min-w-[400px] bg-white w-full shadow-lg gap-2"
     style={{
      gridTemplateAreas: `
      "divImg name"
      "divImg name"
    `,
      gridTemplateColumns:'auto 2fr',
      gridTemplateRows: 'auto 100px',
    }}
    >
      <div style={{gridArea:'divImg'}} className="min-w-[100px] flex justify-between max-w-[100%] h-full md:h-full md:w-[200px]  overflow-hidden   " >
        
        <ImageOverlayScreen 
         src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg" 
         className="w-[200px] h-[200px] "
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
       <header style={{gridArea:'header'}} ><h3 className="text-lg font-semibold capitalize mb-6">Daniela mendes lisa</h3></header>

       <div className="w-full text-[0.87rem] capitalize flex flex-col md:flex-row justify-between" style={{ gridArea: 'tag' }}>
  <div className="flex  flex-row md:flex-col gap-2">
  <span className="text-gray-500">Categoria</span>
  <strong className="font-semibold">visitante</strong>
</div>
  
  <div className="flex flex-row md:flex-col gap-2">
  <span className="text-gray-500">Fluxo</span>
  <strong className="font-semibold">saída</strong>
</div>
  
  <div className="flex flex-row md:flex-col  gap-2">
  <span className="text-gray-500">Momento</span>
  <strong className="font-semibold">31/07/2025 - 11:00</strong>
</div>
  
  <div className="flex flex-row md:flex-col  gap-2">
  <span className="text-gray-500">Locomoção</span>
  <strong className="font-semibold">carro</strong>
</div>

  <div className="flex flex-row md:flex-col  gap-2">
  <span className="text-gray-500">Endereço</span>
  <strong className="font-semibold">casa - 02</strong>
</div>

     </div>  
    </div>
     </div>
  );
}





