import axios from "axios";
import { PersonImpl } from "./Person";

export class SpeciesImpl{

    people: string[];
    resourceType: string = "Species";

    constructor(people: PersonImpl[]) {
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<SpeciesImpl> {

        const people =  await Promise.all(
            obj.people.map(async (personUrl: string) => {
                const response = await axios.get<PersonImpl>(personUrl);
                return response.data;}));

        return new SpeciesImpl(people);
    }
}