import { Employee } from "./Employee"
import { Gender } from "../../enum/Gender";

export class coPilot extends Employee {
    constructor(
        name: string,
        gender: Gender,
        age: number,
        phone: string,
        nationality: string,
        salary: number,
    ) {
        super(name, gender, age, phone, nationality, salary);
    }
}