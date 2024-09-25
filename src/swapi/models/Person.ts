import { Resource } from "./Resource";

export class Person extends Resource{

    readonly type: string = "Person";
    static resource: string = "people";

    private constructor(name: string) {
        super();
        this.name = name;
    }

    static fromObject(obj: any): Person {
        return new Person(obj.name);
    }
}