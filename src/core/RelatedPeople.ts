import { Resource } from "../swapi/models/Resource";

export class RelatedPeople {

    query: string;
    people: Resource[];

    constructor(query: string, people: Resource[]) {
        this.query = query;
        this.people = people;
    }

    toString(): string {
        let displayString = "";
        this.people.map(person => {
            displayString += `\n${person.name} | ${person.type} | `;
            const peopleStr = person.people.join(", ");
            displayString += (peopleStr !== "" ? peopleStr : "No related people found");
        })
        return displayString;
    }

}