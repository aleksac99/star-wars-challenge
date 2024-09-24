import axios from "axios";
import { Film } from "./Film";
import { PersonImpl } from "./Person";

export class FilmImpl {
    characters: string[];
    director: string;
    producer: string;
    resourceType: string = "Film";
    name: string;

    constructor(name: string, characters: PersonImpl[], director: string, producer: string) {
        this.name = name;
        this.characters = characters.map(character => character.name);
        this.director = director;
        this.producer = producer
    }

    get producer_list(): string[] {
        console.log(typeof this.producer);
        return this.producer.split(", ");
    }

    get people(): string[] {
        return [...this.characters, this.director, ...this.producer_list];
    }
    
    static async fromObject(obj: any): Promise<FilmImpl> {

        const characters =  await Promise.all(
            obj.characters.map(async (characterUrl: string) => {
                const response = await axios.get<PersonImpl>(characterUrl);
                return response.data;}));

        return new FilmImpl(obj.title, characters, obj.director, obj.producer);
    }
}