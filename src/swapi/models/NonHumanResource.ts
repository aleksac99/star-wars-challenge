import axios from "axios";
import { Resource } from "./Resource";
import { Person } from "./Person";
import { REQUEST_TIMEOUT } from "../utils/consts";

export abstract class NonHumanResource extends Resource {

    people: string[];

    static async fetchPeople(urls: string[]) {

        const people =  await Promise.all(
            urls.map(async (url: string) => {
                if (!Resource.cache.has(url)) {
                    const response = await axios.get<Person>(url, {timeout: REQUEST_TIMEOUT});
                    Resource.cache.set(url, response.data);
                }
                return Person.fromObject(Resource.cache.get(url));}));

        return people;
    }
}