import axios from "axios";
import { Person } from "./Person";
import { Resource } from "./Resource";

export class SpeciesImpl extends Resource{

    people: string[];
    resourceType: string = "Species";

    private constructor(people: Person[]) {
        super();
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<SpeciesImpl> {

        const people =  await super.fetchPeople(obj.people);

        return new SpeciesImpl(people);
    }
}