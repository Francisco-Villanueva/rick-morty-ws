import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getCharacters = async (page = 1, count = 20) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

export const searchCharacters = async (name, page = 1, count = 20) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}&page=${page}&count=${count}`);
    return response.data;
  } catch (error) {
    console.error('Error searching characters:', error);
    throw error;
  }
};
