import axios from "axios";
import { Person } from "./Person";

export abstract class Resource {
    name: string;
    readonly type: string;
    static resource: string;
    people: string[];

    static async fetchPeople(urls: string[]) {

        const people =  await Promise.all(
            urls.map(async (url: string) => {
                const response = await axios.get<Person>(url);
                return response.data;}));

        return people;
    }
}