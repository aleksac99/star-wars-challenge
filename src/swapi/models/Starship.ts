import axios from "axios";
import { PersonImpl } from "./Person";

export class StarshipImpl{

    people: string[];
    resourceType: string = "Starship";

    constructor(people: PersonImpl[]) {
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<StarshipImpl> {

        const pilots =  await Promise.all(
            obj.pilots.map(async (pilotUrl: string) => {
                const response = await axios.get<PersonImpl>(pilotUrl);
                return response.data;}));

        return new StarshipImpl(pilots);
    }
}