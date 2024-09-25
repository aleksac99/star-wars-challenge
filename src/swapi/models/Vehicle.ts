import { Person } from "./Person";
import { NonHumanResource } from "./NonHumanResource";

export class Vehicle extends NonHumanResource{
    
    readonly type: string = "Vehicle";
    static resource: string = "vehicles";

    private constructor(name: string, people: Person[]) {
        super();
        this.name = name;
        this.people = people.map(character => character.name);
    }

    static async fromObject(obj: any): Promise<Vehicle> {

        const pilots =  await super.fetchPeople(obj.pilots);

        return new Vehicle(obj.name, pilots);
    }
}