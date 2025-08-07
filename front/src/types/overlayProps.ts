
import { OpenRegisterProps } from "./OpenRegister"

export type OverlayProps = OpenRegisterProps &{
 children: React.JSX.Element ,
 className?:string
 overlay?: boolean
 onClick?: () => void;
}