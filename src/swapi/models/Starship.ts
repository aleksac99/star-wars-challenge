import { Person } from "./Person";
import { Resource } from "./Resource";

export class Starship extends Resource{
    
    readonly type: string = "Starship";
    static resource: string = "starships";

    private constructor(name: string, people: Person[]) {
        super();
        this.name = name;
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<Starship> {

        const pilots =  await super.fetchPeople(obj.pilots);

        return new Starship(obj.name, pilots);
    }
}