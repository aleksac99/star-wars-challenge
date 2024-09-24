export interface Person {
    name: string
}

export class PersonImpl implements Person {

    name: string;

    constructor(name: string) {
        this.name = name
    }

    static fromObject(obj: any): PersonImpl {
        return new PersonImpl(obj.name);
    }
}