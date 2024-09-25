import { Person } from "./Person";
import { NonHumanResource } from "./NonHumanResource";

export class Species extends NonHumanResource{
    
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