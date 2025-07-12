import { Label } from "@/components/ui/label";
import { JSX } from "react";

type StyleProps = React.HTMLAttributes<HTMLDivElement>
//HTMLAttributes<HTMLDivElement>.className?: string | undefined
type BoxProps={
   className?:StyleProps | string | undefined
   children?:JSX.Element
   label?:string
   gridArea:string
}

export function Box({className,children,label,gridArea}: BoxProps) {
    return(
    <div 
        className={`grid gap-4 ${className}`}
        style={{ gridArea:gridArea}}
        >
        <Label  className="text-transform: uppercase" >{label}</Label>
          {children}
    </div>
    )
}