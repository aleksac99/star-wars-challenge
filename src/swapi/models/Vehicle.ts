import { Person } from "./Person";
import { Resource } from "./Resource";

export class Vehicle extends Resource{
    
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