import { NonHumanResource } from "../swapi/models/NonHumanResource";
import { Resource } from "../swapi/models/Resource";

export class RelatedPeople {

    query: string;
    resources: Resource[];

    constructor(query: string, resources: Resource[] ) {
        this.query = query;
        this.resources = resources;
    }

    toString(): string {
        let displayString = "";
        this.resources.map(resource => {
            displayString += `\n${resource.name} | ${resource.type} | `;
            const peopleStr = resource instanceof NonHumanResource ? resource.people.join(", ") : resource.name;
            displayString += (peopleStr !== "" ? peopleStr : "No related people found");
        })
        return displayString;
    }

}