import { Person } from "./Person";
import { Resource } from "./Resource";

export class Vehicle extends Resource{

    people: string[];
    resourceType: string = "Vehicle";

    private constructor(people: Person[]) {
        super();
        this.people = people.map(character => character.name);
    }

    static async fromObject(obj: any): Promise<Vehicle> {

        const pilots =  await super.fetchPeople(obj.pilots);

        return new Vehicle(pilots);
    }
}