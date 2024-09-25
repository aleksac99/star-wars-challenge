import { NonHumanResource } from "./NonHumanResource";
import { Person } from "./Person";

export class Planet extends NonHumanResource {
    
    readonly type: string = "Planet";
    static resource: string = "planets";

    private constructor(name: string, people: Person[]) {
        super();
        this.name = name;
        this.people = people.map(person => person.name);
    }
    
    static async fromObject(obj: any) {

        const residents =  await super.fetchPeople(obj.residents);

        return new Planet(obj.name, residents);
    }
}