import {Person } from "../../Person/Person";
import { Gender } from "../../enum/Gender";

export class Employee extends Person {
    constructor(
        name: string,
        gender: Gender,
        age: number,
        phone: string,
        nationality: string,
        private salary: number
    ) {
        super(name, age, gender, phone, nationality);
    }

    getSalary(): number {
        return this.salary;
    }

}