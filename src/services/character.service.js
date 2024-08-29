import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const getCharacters = async (page=1) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
export const getCharacterById = async (id)  => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
export const searchCharacters = async (name, page = 1) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};


