import axios from 'axios';
/*


TODO 
- Mover la API URL desde variables de entorno!
- Implementar `getCharacters` y `getCharacterById` y luego usar esos serivicios donde corresponda.


*/
const API_URL = "https://rickandmortyapi.com/api/character"


export const getCharacters = async () => {
  // aca tenemos que ejecutar la peticion que nos va a traer todos los personajes.
  try {

  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

export const getCharacterById = async () => {
   // aca tenemos que ejecutar la peticion que nos va  dar la info de un personaje en base al id.
  try {

  } catch (error) {
    console.error('Error fetching character information:', error);
    throw error;
  }
};
/*











*/




export const getCharactersInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data.info;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};





export const searchCharacters = async (name, page = 1, count = 20) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error searching characters:', error);
    throw error;
  }
};
