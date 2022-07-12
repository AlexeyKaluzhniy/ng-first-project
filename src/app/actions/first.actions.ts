import { Person } from "../model/person.model";

export class AddPerson {
    static readonly type = '[FIRST PAGE] Add Person';

    constructor(public payload: Person) {}
}