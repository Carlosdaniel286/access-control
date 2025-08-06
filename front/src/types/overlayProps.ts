import { MouseEventHandler } from "react"
import { OpenRegisterProps } from "./OpenRegister"

export type OverlayProps = OpenRegisterProps &{
 children: React.JSX.Element ,
 className?:string
 overlay?: boolean
 onClick?: MouseEventHandler<HTMLDivElement> | undefined
}