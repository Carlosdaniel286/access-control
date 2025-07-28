export async function vehicleApi() {
  try {
    const response = await fetch('http://localhost:3000/api/item');

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
   
    return data;
  
  } catch (error) {
    console.error('Falha ao buscar marcas:', error);
    return [];
  }
};

export function A(){

}

export const userPromise = vehicleApi();

