import { Person } from "./person.js";

export class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} está ensinando ${this.subject}.`);
    }
}