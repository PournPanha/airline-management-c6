import {Person } from "../../Person/Person";
import { Gender } from "../../enum/Gender";

export class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        gender: Gender,
        age: number,
        phone: string,
        nationality: string,
        private salary: number
    ) {
        super(firstName, lastName, age, gender, phone, nationality);
    }

    getSalary(): number {
        return this.salary;
    }
}