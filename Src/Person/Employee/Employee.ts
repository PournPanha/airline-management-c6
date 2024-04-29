import { Gender, Person } from "../../Person/Person";

export class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        gender: Gender,
        age: number,
        phone: string,
        nationality: string,
        protected salary: number
    ) {
        super(firstName, lastName, age, phone, nationality);
    }

    getSalary(): number {
        return this.salary;
    }
}