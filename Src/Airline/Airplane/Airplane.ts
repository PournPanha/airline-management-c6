import { Seat } from "../Seat/seat";
import { Airline } from "../Airline";
import { Employee } from "../../Person/Employee/Employee";
import { Pilot } from "../Pilot/pilot";
import { Flight } from "../Flight/Flight";
export class Airplane {
    constructor(
        private registrationNumber: string,  
        private seats: Seat[] = [],
        private airline: Airline,
        private employees: Employee[] = [],
        private pilots: Pilot[] = [],
        private flights: Flight[] = [],
    ) {}

    addSeat(seatNumber: string): Seat {
        let newSeat = new Seat(seatNumber);
        this.seats.push(newSeat);
        return newSeat;
    }
}