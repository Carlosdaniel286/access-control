

export type MaskedInputProps = {
    ariaLabel?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onAccept?: (value: string) => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    hasError?: boolean;
    message?: string;
    className?: string;
    id?: string;
    type?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
   
    label?: string;
    mask?: string ;
   
    
}