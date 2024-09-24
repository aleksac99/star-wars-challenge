import { Resource } from "./Resource";
import { Person } from "./Person";

export class Planet extends Resource {

    type: string = "Planet";

    private constructor(name: string, people: Person[]) {
        super();
        this.people = people.map(person => person.name);
        this.name = name;
    }
    
    static async fromObject(obj: any) {

        const residents =  await super.fetchPeople(obj.residents);

        return new Planet(obj.name, residents);
    }
}