'use client'

import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import Link from "next/link";
import { OpenRegister } from "./OpenRegister";
import EngineeringIcon from '@mui/icons-material/Engineering';
import { RenderTextarea } from "./RenderTextArea";
import { useOverlay } from "@/contexts/OverlayContext";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { motion } from "framer-motion";

export function Sidebar() {
  const strokeWidth = 1.7;
  const { overlays, handleOpenOverlay, handleCloseOverlay } = useOverlay();
 
  return (
   
    <motion.aside
      initial={{ opacity: !overlays.sideBar?1:0, x:!overlays.sideBar? 0:-1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: !overlays.sideBar?0:0.7, ease: "easeOut" }}
       exit={{ opacity: 0, x: -1000, transition: { duration:4 } }} // saída suave
      className={`
        max-w-[200px]
        h-[100vh]
        bg-slate-900
        pt-0
        swap:top-[85px]
        border-r 
        border-gray-300 shadow-lg
        swap:static
        absolute
        top-0
        left-0
        bottom-0
        z-50
      `}
    >
      {overlays.register && (
        <OpenRegister
          isOpen={overlays.register}
          setIsOpen={() => {
            handleCloseOverlay('register');
          }}
        />
      )}
      {overlays.textArea && (
        <RenderTextarea
          setIsOpen={() => {
            handleCloseOverlay('textArea');
          }}
        />
      )}
      <header className="
         swap:hidden 
         flex 
         items-center 
         flex-row-reverse
         
         px-4
         py-2
         
         "
         >
        <h5 
        onClick={(()=>{
          
          handleCloseOverlay('sideBar');
        })}
        className="
         rounded-full 
          p-0 
          m-0 
           ">
          <KeyboardReturnIcon
          className="text-white cursor-pointer"
          sx={{fontSize:'3rem'}}
          //size={32} 
        // color="white" 
          strokeWidth={2.5} />
          </h5>
      </header>
      <nav aria-label="Sidebar Navigation">
        <ul className="flex flex-col text-white gap-4">
          <li>
           
            <Link href="/virtual/painel" className="widgets">
              <HomeIcon strokeWidth={strokeWidth} aria-hidden="true" />
              <span className=" font-medium">Home</span>
            </Link>
            
          </li>

          <li>
            <button
              className="widgets"
              onClick={() => {
                handleOpenOverlay('register');
              }}
              type="button"
            >
              <PersonAddIcon strokeWidth={strokeWidth} />
              <span className="font-medium">Cadastrar</span>
            </button>
          </li>

          <li>
            <button
              className="widgets"
              type="button"
            >
              <GroupIcon
                strokeWidth={strokeWidth}
                className="hover:stroke-[#3e9392]"
              />
              <span className="font-medium">Visitantes</span>
            </button>
          </li>

          <li>
            <button
              className="widgets "
              type="button"
            >
              <EngineeringIcon className="hover:stroke-[#3e9392]" />
              <span className="font-medium">Prestadores</span>
            </button>
          </li>

          <li>
            <button
              className="widgets"
              type="button"
            >
              <DirectionsCarFilledIcon strokeWidth={strokeWidth} />
              <span className="font-medium">Veículos</span>
            </button>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
}
