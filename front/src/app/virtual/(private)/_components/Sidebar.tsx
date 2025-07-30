'use client'

import { WorkerIcon } from "@/icons/user";
import { Car, House, UserPlus, Users, X } from "lucide-react";

import Link from "next/link";
import { OpenRegister } from "./OpenRegister";

import { RenderTextarea } from "./RenderTextArea";
import { useOverlay } from "@/contexts/OverlayContext";

import { motion } from "framer-motion";

export function Sidebar() {
  const strokeWidth = 1.7;
  const { overlays, handleOpenOverlay, handleCloseOverlay } = useOverlay();

  
  
  return (
    <motion.aside
      initial={{ opacity: 1, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
        w-full
        max-w-[270px]
        bg-white
        
        pt-0
        sm:top-[85px]
        border-r border-gray-300 shadow-lg
        sm:static
        absolute
        top-0
        left-0
        bottom-0
        z-50
      "
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
         sm:hidden 
         flex 
         items-center 
         flex-row-reverse
         cursor-pointer
         px-4
         py-2
         "
         >
        <h5 className="
        border-black 
          ring-4 
          rounded-full  
          p-0 
          m-0 
           ">
          <X size={32} 
          color="#0a0a0a" 
          strokeWidth={2.5} />
          </h5>
      </header>
      <nav aria-label="Sidebar Navigation">
        <ul className="flex flex-col gap-4">
          <li>
           
            <Link href="/virtual/painel" className="widgets">
              <House strokeWidth={strokeWidth} aria-hidden="true" />
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
              <UserPlus strokeWidth={strokeWidth} />
              <span className="font-medium">Cadastrar</span>
            </button>
          </li>

          <li>
            <button
              className="widgets"
              type="button"
            >
              <Users
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
              <WorkerIcon className="hover:stroke-[#3e9392]" />
              <span className="font-medium">Prestadores</span>
            </button>
          </li>

          <li>
            <button
              className="widgets"
              type="button"
            >
              <Car strokeWidth={strokeWidth} />
              <span className="font-medium">Veículos</span>
            </button>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
}
