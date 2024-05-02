import { Seat } from "../Seat/Seat";
import { Airline } from "../Airline";
export class Airplane {
    private seats: Seat[] = [];
    constructor(
        private registrationNumber: string, 
        private airline: Airline
    ) {}

    addSeat(seatNumber: string): Seat {
        let newSeat = new Seat(seatNumber);
        this.seats.push(newSeat);
        return newSeat;
    }
}