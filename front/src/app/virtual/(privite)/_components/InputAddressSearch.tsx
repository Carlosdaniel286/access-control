// ...existing code from adressSeachInput.tsx, export function InputAddressSearch ...
import { SxProps } from "@mui/joy/styles/types/theme";
import { InputSearch } from "./InputSeach";

const options = [
    { id: 1, title: 'João Silva - Casa 1', casa: '1' },
    { id: 2, title: 'Maria Oliveira - Casa 1', casa: '1' },
    { id: 3, title: 'Carlos Daniel - Casa 1', casa: '1' },
    { id: 4, title: 'Ana Paula - Casa 2', casa: '2' },
    { id: 5, title: 'Pedro Santos - Casa 2', casa: '2' },
    { id: 6, title: 'Lucas Pereira - Casa 2', casa: '2' },
    { id: 7, title: 'Mariana Costa - Casa 3', casa: '3' },
    { id: 8, title: 'Ricardo Almeida - Casa 3', casa: '3' },
    { id: 9, title: 'Fernanda Lima - Casa 3', casa: '3' },
    { id: 10, title: 'Bruno Souza - Casa 4', casa: '4' },
    { id: 11, title: 'Camila Rocha - Casa 4', casa: '4' },
    { id: 12, title: 'Diego Martins - Casa 4', casa: '4' },
    { id: 13, title: 'Carlos Daniel - Casa 1', casa: '1' }
];


export function InputAddressSearch({ sx }: { sx?: SxProps }) {
    return (
        <InputSearch
            sx={sx}
            placeholder="endereço do morador ou nome..."
            options={options}
            getOptionLabel={((options) => {
                return options.title
            })}
        />
    )
}