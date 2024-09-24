export class Person{

    name: string;

    constructor(name: string) {
        this.name = name
    }

    static fromObject(obj: any): Person {
        return new Person(obj.name);
    }
}