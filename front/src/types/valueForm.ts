//export type AccessOptionBase = { id: number; label: string; value: string };

export type AccessOptionBase = { id: number; label: string; };

export type AccessMode = AccessOptionBase & {
  value: 'pedestre' | 'veiculo' | 'passageiro' | 'bicicleta' 
}

export type AccessRegistration = AccessOptionBase & {
  value: 'fixo' | 'esporádico' 
}

export type AccessProfileOption = AccessOptionBase & {
  value: 'visitante' | 'prestador' | 'entregador' 
}

export type AccessAddressResident = AccessOptionBase &{
  casa:string | null
}

export type ValueForm ={
  name:string;
  cpf:string;
  accessRegistration: AccessRegistration |null
  accessMode: AccessMode |null
  accessProfileOption:AccessProfileOption |null
}
