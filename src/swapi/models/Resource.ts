export abstract class Resource {
    static resource: string;
    static cache: Map<string, object> = new Map();
    name: string;
    readonly type: string;
}