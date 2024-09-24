import { Person } from "./Person";
import { Resource } from "./Resource";

export class Species extends Resource{
    
    readonly type: string = "Species";
    static resource: string = "species";

    private constructor(name: string, people: Person[]) {
        super();
        this.name = name;
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any): Promise<Species> {

        const people =  await super.fetchPeople(obj.people);

        return new Species(obj.name, people);
    }
}