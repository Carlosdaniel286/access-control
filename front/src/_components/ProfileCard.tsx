'use client'


import React from 'react';

// --- MUI Icons ---
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { ImageOverlayScreen } from '@/_components/ImageOverlayScreen';
import { useOverlay } from '@/contexts/OverlayContext';

// --- Tipos ---
type LastFlow = {
  type: 'entrada' | 'saida';
  time: string;
};

type Transport = 'carro' | 'moto' | 'a pé';

export type Person = {
  id: number;
  name: string;
  status: 'Residente' | 'Locatário' | 'Prestador' | 'Visitante';
  lastFlow: LastFlow;
  profilePic: string;
  unit: string;
  transport: Transport;
};

type CondoCardProps = Person;

// --- Componente Principal ---

// --- Componente CondoCard ---


export function ProfileCard({
  name,
  status,
  lastFlow,
  //profilePic ="https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg",
  unit,
  transport,
}: CondoCardProps) {
  const isEntry = lastFlow.type === 'entrada';
  const FlowIcon = isEntry ? ArrowUpwardIcon : ArrowDownwardIcon;
  const flowColor = isEntry ? 'text-green-600' : 'text-red-600';

  // Ícone de status
  let StatusIcon: React.ElementType;
  if (status === 'Residente' || status === 'Locatário') StatusIcon = BusinessIcon;
  else if (status === 'Prestador') StatusIcon = EngineeringIcon;
  else StatusIcon = PersonIcon;

  // Ícone de transporte
  let TransportIcon: React.ElementType;
  if (transport === 'carro') TransportIcon = DirectionsCarIcon;
  else if (transport === 'moto') TransportIcon = TwoWheelerIcon;
  else TransportIcon = DirectionsWalkIcon;
const {handleOpenOverlay} = useOverlay()
  return (
    <div  onClick={(()=>{
      handleOpenOverlay('infoCard')
    })} className="bg-white hover:ring-4 hover:ring-black w-full h-full rounded-xl cursor-pointer shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex  space-x-1 mb-4">
        {/* Foto de perfil */}
        <figure>
          <ImageOverlayScreen
            src={"https://images.pexels.com/photos/3771123/pexels-photo-3771123.jpeg"}
            className="h-[80px] w-[80px] m-2 max-h-[400px] max-w-[400px] flex rounded-full"
          />
        </figure>

        {/* Nome e ícones empilhados */}
        <div className="flex-1">
          <h2 className="text-sm font-bold text-gray-900">{name}</h2>
          <div className="flex flex-col mt-2 space-y-1 text-gray-600">
            {/* Status */}
            <div className="flex items-center space-x-1">
              <StatusIcon className="w-3 h-3 text-gray-400" />
              <span className="text-sm">{status}</span>
            </div>
            {/* Unidade */}
            <div className="flex items-center space-x-1">
              <HomeIcon className="w-3 h-3 text-gray-400" />
              <span className="text-sm">{unit}</span>
            </div>
            {/* Transporte */}
            <div className="flex items-center space-x-1">
              <TransportIcon className="w-3 h-3 text-gray-400" />
              <span className="text-sm">{transport}</span>
            </div>
          </div>
        </div>

        {/* Último fluxo */}
        <div className="flex flex-col items-end  ">
          <div className="flex items-center space-x-1">
            <span className={`text-[0.9rem] font-medium ${flowColor}`}>
              {isEntry ? 'Entrada' : 'Saída'}
            </span>
            <FlowIcon className={`w-5 h-5 ${flowColor}`} />
          </div>
          <span className="text-xs font-light text-gray-400 mt-1">
            ({lastFlow.time})
          </span>
        </div>
      </div>
    </div>
  );
}
