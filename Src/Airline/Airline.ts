import { Employee } from "../Person/Employee/Employee";
import { Airplane } from "./Airplane/Airplane"

export class Airline{
    private employees: Employee[];
    private airplanes: Airplane[];
    constructor(
        private name: string,
        private code: string,
    ){}
}
