import { Person } from "./Person";
import { Resource } from "./Resource";

export class Film extends Resource {

    private constructor(name: string, characters: Person[], director: string, producer: string) {
        super();
        this.name = name;
        this.people = [...characters.map(character => character.name), director, ...producer.split(", ")];
    }

    static async fromObject(obj: any): Promise<Film> {

        const characters =  await super.fetchPeople(obj.characters);
        return new Film(obj.title, characters, obj.director, obj.producer);
    }
}