import axios from "axios";
import { Person } from "./Person";

export abstract class Resource {
    static resource: string;
    static cache: Map<string, object> = new Map();
    name: string;
    people: string[];
    readonly type: string;

    static async fetchPeople(urls: string[]) {

        const people =  await Promise.all(
            urls.map(async (url: string) => {
                if (!Resource.cache.has(url)) {
                    const response = await axios.get<Person>(url);
                    Resource.cache.set(url, response.data);
                }
                return Person.fromObject(Resource.cache.get(url));}));

        return people;
    }
}