
import { Employee } from "../../Person/Employee/Employee";
import { Gender } from "../../enum/Gender";

export class Pilot extends Employee {
    private license_number: number;
    constructor(
        firstName: string,
        lastName: string,
        gender: Gender,
        age: number,
        phone: string,
        nationality: string,
        salary: number,
        license_number: number
    ) {
        super(firstName, lastName, gender, age, phone, nationality, salary);
    }
}
