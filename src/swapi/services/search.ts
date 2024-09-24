import axios from 'axios';

const BASE_URL = "https://swapi.dev/api"

export const search = async <T>(resource: string, term: string): Promise<T> => {
    const response = await axios.get<T>(`${BASE_URL}/${resource}/?search=${term}`);
    return response.data;
  };