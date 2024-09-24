import { Person } from "./Person";
import { Resource } from "./Resource";

export class Starship extends Resource{

    people: string[];
    resourceType: string = "Starship";

    private constructor(people: Person[]) {
        super();
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<Starship> {

        const pilots =  await super.fetchPeople(obj.pilots);

        return new Starship(pilots);
    }
}