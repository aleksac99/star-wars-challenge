export class Person{

    readonly type: string = "Person";
    static resource: string = "people";
    static cache: Map<string, Person> = new Map();
    name: string;
    people: string[]

    private constructor(name: string) {
        this.name = name;
        this.people = [];
    }

    static fromObject(obj: any): Person {
        if (!Person.cache.has(obj.url)) {
            Person.cache.set(obj.url, new Person(obj.name));
        }
        return Person.cache.get(obj.url) as Person;
    }
}