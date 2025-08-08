'use client';
import { ImageOverlayScreen } from "./ImageOverlayScreen";
import { cn } from "@/lib/utils";



type ProfileInfoValueProps = {
  value: string;
  className?: string;
};

function ProfileInfoValue({ value, className }: ProfileInfoValueProps) {
   
  return (
    <strong className={cn(
      'font-semibold text-gray-800 ',
       className
    )}>{value}</strong>
    
  );
}

type ProfileProps={
  onClick?: () => void;
}


export function ProfileCard({onClick}:ProfileProps) {
  return (
    <div
    onClick={(()=>{
      onClick?.()
      })}
      className="grid w-full min-w-[400px] gap-3  rounded-lg bg-white py-1.5 cursor-pointer shadow-md"
      style={{
        gridTemplateAreas: `
          "divImg name"
          "divImg name"
        `,
        gridTemplateColumns: 'auto 2fr',
        gridTemplateRows: 'auto 100px',
      }}
    >
      <figure
        style={{ gridArea: 'divImg' }}
       className="flex items-center px-1  "
       
      >
        <ImageOverlayScreen
          src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg"
          className="h-[80px] w-[80px] md:min-h-[90px] md:min-w-[90px] lg:min-h-[100px] lg:min-w-[100px]"
        />
      </figure>

      <div
        style={{
          gridArea: 'name',
          gridTemplateAreas: `
            "header header header"
            "tag tag tag"
            "info info info"
          `,
          gridTemplateColumns: '100px 100px',
          gridTemplateRows: 'auto auto',
        }}
        className="grid   p-3"
      >
        <header style={{ gridArea: 'header' }}>
          <h3 className="mb-6 font-semibold capitalize text-[1rem] sm:text-lg lg:text-[1.3rem]">
            Daniela mendes lisa
          </h3>
        </header>

        <div
          className="grid  capitalize    gap-5 text-[0.9rem] sm:flex sm:flex-col sm:justify-around md:text-[1rem] lg:text-[1.05rem]"
          style={{ gridArea: 'tag' }}
        >
         {/* Valores */}
          <div className="gap-4 flex flex-col md:grid md:grid-cols-6">
            <ProfileInfoValue value="visitante" />
            <ProfileInfoValue className="hidden md:block" value="saída" />
            <ProfileInfoValue className="hidden md:block" value="31/07/2025" />
            <ProfileInfoValue className="hidden md:block" value="11:00" />
            <ProfileInfoValue className="hidden md:block" value="carro" />
            <ProfileInfoValue value="casa - 02" />
          </div>
        </div>
      </div>
    </div>
  );
}