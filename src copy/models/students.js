import { Person } from "./person.js";

export class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`${this.name} está estudando ${this.course}.`);
    }
}