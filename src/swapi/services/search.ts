import axios from 'axios';
import { BASE_URL } from '../utils/consts';

export const search = async <T>(resource: string, term: string): Promise<T> => {
    const response = await axios.get<T>(`${BASE_URL}/${resource}/?search=${term}`);
    return response.data;
  };