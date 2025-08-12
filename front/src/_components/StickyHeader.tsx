import {
  Tag,
  ArrowUpDown,
  Calendar,
  Clock,
  Car,
  MapPin,
  LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export function StickyHeader() {
  type ProfileInfoLabelProps = {
    label: "Categoria" | "Fluxo" | "Data" | "Locomoção" | "Endereço" | "hora";
    className?: string;
    Icon: LucideIcon;
  };

  function ProfileInfoLabel({ label, className, Icon }: ProfileInfoLabelProps) {
    return (
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4" />
        <span
          className={cn("font-semibold text-gray-700", className)}
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="grid capitalize text-[0.8rem] sm:flex sm:flex-col sm:justify-around md:text-[0.9rem] lg:text-[1.05rem]">
      {/* Cabeçalhos */}
      <div className="grid grid-cols-6 gap-3.5">
        <ProfileInfoLabel Icon={Tag} label="Categoria" />
        <ProfileInfoLabel Icon={ArrowUpDown} label="Fluxo" />
        <ProfileInfoLabel Icon={Calendar} label="Data" />
        <ProfileInfoLabel Icon={Clock} label="hora" />
        <ProfileInfoLabel Icon={Car} label="Locomoção" />
        <ProfileInfoLabel Icon={MapPin} label="Endereço" />
      </div>
    </div>
  );
}
