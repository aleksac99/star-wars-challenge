import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../utils/consts';

export const search = async <T>(resource: string, term: string): Promise<T> => {
    const response = await axios.get<T>(`${BASE_URL}/${resource}/?search=${term}`, {timeout: REQUEST_TIMEOUT});
    return response.data;
  };