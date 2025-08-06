'use client';
import { ImageOverlayScreen } from "./ImageOverlayScreen";


type ProfileInfoLabelProps = {
  label: 'Categoria' | 'Fluxo' | 'Data' | 'Locomoção' | 'Endereço'| 'hora';
  className?: string;
  
};
function ProfileInfoLabel({ label, className }: ProfileInfoLabelProps) {
  const style = className ?? 'text-gray-500';
  return <span className={style}>{label}</span>
   
}

type ProfileInfoValueProps = {
  value: string;
  className?: string;
};

function ProfileInfoValue({ value, className }: ProfileInfoValueProps) {
   const style = className ?? 'font-semibold';
  return (
    <strong className={style}>{value}</strong>
    
  );
}

type ProfileProps={
  onClick?: () => void;
}


export function ProfileCard({onClick}:ProfileProps) {
  return (
    <div
    onClick={onClick}
      className="grid w-full min-w-[400px] gap-3 rounded-lg bg-white p-1.5 cursor-pointer shadow-md"
      style={{
        gridTemplateAreas: `
          "divImg name"
          "divImg name"
        `,
        gridTemplateColumns: 'auto 2fr',
        gridTemplateRows: 'auto 100px',
      }}
    >
      <div
        style={{ gridArea: 'divImg' }}
        className="flex overflow-hidden sm:items-center sm:justify-center"
      >
        <ImageOverlayScreen
          src="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg"
          className="min-h-[100px] min-w-[100px] md:min-h-[125px] md:min-w-[125px] lg:min-h-[150px] lg:min-w-[150px]"
        />
      </div>

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
        className="grid p-3"
      >
        <header style={{ gridArea: 'header' }}>
          <h3 className="mb-6 font-semibold capitalize text-[1rem] sm:text-lg lg:text-[1.3rem]">
            Daniela mendes lisa
          </h3>
        </header>

        <div
          className="grid grid-cols-2 gap-5 text-[0.9rem] sm:flex sm:flex-col sm:justify-around md:text-[1rem] lg:text-[1.05rem]"
          style={{ gridArea: 'tag' }}
        >
          {/* Cabeçalhos */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-6">
          <ProfileInfoLabel label="Categoria" />
          <ProfileInfoLabel label="Fluxo" />
          <ProfileInfoLabel label="Data" />
          <ProfileInfoLabel label="hora" />
          <ProfileInfoLabel label="Locomoção" />
          <ProfileInfoLabel label="Endereço" />
          </div>

          {/* Valores */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-6">
            <ProfileInfoValue value="visitante" />
            <ProfileInfoValue value="saída" />
            <ProfileInfoValue value="31/07/2025" />
            <ProfileInfoValue value="11:00" />
            <ProfileInfoValue value="carro" />
            <ProfileInfoValue value="casa - 02" />
          </div>
        </div>
      </div>
    </div>
  );
}