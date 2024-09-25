import { Person } from "./Person";
import { NonHumanResource } from "./NonHumanResource";

export class Starship extends NonHumanResource{
    
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