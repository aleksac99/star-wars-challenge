import axios from "axios";
import { PersonImpl } from "./Person";

export class VehicleImpl{

    people: string[];
    resourceType: string = "Vehicle";

    constructor(people: PersonImpl[]) {
        this.people = people.map(character => character.name);
    }

    static async fromObject(obj: any): Promise<VehicleImpl> {

        const pilots =  await Promise.all(
            obj.pilots.map(async (pilotUrl: string) => {
                const response = await axios.get<PersonImpl>(pilotUrl);
                return response.data;}));

        return new VehicleImpl(pilots);
    }
}