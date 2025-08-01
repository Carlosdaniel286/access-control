'use client'

import { ImageOverlayScreen } from "./ImageOverlayScreen";
//bg-gray-800 
export function ProfileCard() {
  return (
    <div className=" flex flex-col  md:grid min-w-[400px] bg-white w-full shadow-lg gap-2"
     style={{
      gridTemplateAreas: `
      "divImg name"
      "divImg name"
    `,
      gridTemplateColumns:'200px 2fr',
      gridTemplateRows: 'auto 100px',
    }}
    >
      <div style={{gridArea:'divImg'}} className="min-w-[100px] flex justify-between max-w-[90%] h-[200px] md:h-full md:w-full overflow-hidden bg-gray-200  " >
        <ImageOverlayScreen 
         src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg" 
         className=""
        />
      </div>
       
      <div style={{gridArea:'name',
       gridTemplateAreas: `
      "header header header"
      "tag info info"
    `,
      gridTemplateColumns:'100px 100px',
      gridTemplateRows: 'auto auto',

      }} 
      className="grid p-3 ">
       <header style={{gridArea:'header'}} ><h3 className="text-lg font-semibold capitalize mb-6">Daniela mendes lisa</h3></header>
       
        <div className="flex flex-col gap-4" style={{gridArea:'tag'}}>
          <span className="text-sm text-gray-600 capitalize">categoria:</span>
          <span className="text-sm text-gray-600 capitalize">fluxo:</span>
          <span className="text-sm text-gray-600 capitalize">momento:</span>
          <span className="text-sm text-gray-600 capitalize">locomoção:</span>
          <span className="text-sm text-gray-600 capitalize">Endereço:</span>

        </div>
         <div  className="flex flex-col capitalize min-w-[200px]  justify-between" style={{gridArea:'info'}}>
          <strong className="font-semibold mx-5 text-black">{"visitante"}</strong>
          <strong className="font-semibold mx-5 text-black" >saida</strong>
          <strong className="font-semibold mx-5 text-black" >31/07/2025 - 11:00</strong>
          <strong className="font-semibold mx-5 text-black" >carro</strong>
          <strong className="font-semibold mx-5 text-black" >casa - 02</strong>
        </div>
    
    
     </div>
      
    </div>
  );
}





