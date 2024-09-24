import axios from 'axios';
import { Film } from '../models/Film'; // Adjust the import path as necessary
import { Film } from '../models/Film';

const API_URL = 'https://swapi.dev/api/films/1/'; // Example API endpoint

export const fetchFilms = async (): Promise<Film> => {
    try {
        const response = await axios.get<Film>(API_URL);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw new Error('Failed to fetch data from API');
    }
};
