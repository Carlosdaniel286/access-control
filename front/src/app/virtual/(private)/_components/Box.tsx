
import { JSX } from "react";

type StyleProps = React.HTMLAttributes<HTMLDivElement>
//HTMLAttributes<HTMLDivElement>.className?: string | undefined
type BoxProps={
   className?:StyleProps | string | undefined
   children?:JSX.Element
   gridArea:string
}

export function Box({className,children,gridArea}: BoxProps) {
    return(
    <div 
        className={`grid gap-4 ${className}`}
        style={{ gridArea:gridArea}}
        >
        {children}
    </div>
    )
}