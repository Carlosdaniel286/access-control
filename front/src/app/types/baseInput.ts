export type BaseInputProps = {
    ariaLabel?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasError?: boolean;
    message?: string;
    className?: string;
    id?: string;
    type?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    allowedKeys?: string[];
    deniedKeys?: string[];
    inputKind? :"letters" | "numbers";
    label?: string;
}