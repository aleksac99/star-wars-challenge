import axios from "axios";
import { PersonImpl } from "./Person";

export class PlanetImpl {

    people: string[];
    resourceType: string = "Planet";

    constructor(people: PersonImpl[]) {
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any) {

        const residents: string[] = obj.residents;

        const people =  await Promise.all(
            residents.map(async (residentUrl) => {
                const response = await axios.get<PersonImpl>(residentUrl);
                return response.data;}));

        return new PlanetImpl(people);
    }
}