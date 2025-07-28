import { SxProps } from "@mui/joy/styles/types"

export type RenderSelect ={
    id:number
    label:string
    value:string
}

export type SelectOptions<T> ={
  onValueChange?(value: string | null): void
  value?: string;
  options?:T[] | string[]
  placeholder?: string 
  getOptionLabel?: (option: T) => RenderSelect | null | string
  label?:string
  sx?: SxProps

}
