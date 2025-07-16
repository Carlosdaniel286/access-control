import { AccessMode, AccessProfileOption, AccessRegistration, AccessAddressResident, ValueForm } from "@/app/types/valueForm";

export const optionsAccessMode:AccessMode[] = [
  { id: 1, label: 'Pedestre', value: 'pedestre' },
  { id: 2, label: 'Veículo', value: 'veiculo' },
  { id: 3, label: 'Passageiro', value: 'passageiro' },
  { id: 4, label: 'Bicicleta', value: 'bicicleta' },
];


export const optionsAccessProfile:AccessProfileOption[] = [
  { id: 1, label: 'Visitante', value: 'visitante' },
  { id: 2, label: 'Prestador', value: 'prestador' },
  { id: 3, label: 'Entregador', value: 'entregador' },
  
];


export const optionsAccessRegistration:AccessRegistration[] = [
  { id: 1, label: 'Fixo', value: 'fixo' },
  { id: 2, label: 'Esporádico', value: 'esporádico' },
];

export const optionsAccessAddressResident:AccessAddressResident[] = [
  { id: 1, label: 'João Silva - Casa 1', casa: '1' },
  { id: 2, label: 'Maria Oliveira - Casa 1', casa: '1' },
  { id: 3, label: 'Carlos Daniel - Casa 1', casa: '1' },
  { id: 4, label: 'Ana Paula - Casa 2', casa: '2' },
  { id: 5, label: 'Pedro Santos - Casa 2', casa: '2' },
  { id: 6, label: 'Lucas Pereira - Casa 2', casa: '2' },
  { id: 7, label: 'Mariana Costa - Casa 3', casa: '3' },
  { id: 8, label: 'Ricardo Almeida - Casa 3', casa: '3' },
  { id: 9, label: 'Fernanda Lima - Casa 3', casa: '3' },
  { id: 10, label: 'Bruno Souza - Casa 4', casa: '4' },
  { id: 11, label: 'Camila Rocha - Casa 4', casa: '4' },
  { id: 12, label: 'Diego Martins - Casa 4', casa: '4' },
  { id: 13, label: 'Carlos Daniel - Casa 1', casa: '1' }


];


export const initValueForm: ValueForm = {
  name: '',
  cpf: '',
  accessRegistration:null,
  accessMode: null,
  accessProfileOption: null,
}