import { Employee } from "../Person/Employee/Employee";
import { Airplane } from "./Airplane/Airplane"
export class Airline {
    private employees: Employee[];
    private airplanes: Airplane[];

    constructor(
        private name: string,
        private code: string
    ) {
        this.employees = []; // Initialize the employees array
    }

    public getAllSalaryOfEmployees() {
        let salary = 0;
        this.employees.forEach(element => {
            salary += element.getSalary()
        });
        return "The " + this.getName() + " have paid for per month are " + salary + "$ for all employees.";
    }

    public addEmployee(employee: Employee) {
        this.employees.push(employee)
    }

    public getName(): string {
        return this.name;
    }
}
