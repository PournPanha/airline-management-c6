import { Passenger } from "../../Person/Passenger/Passenger";
import { Seat } from "../Seat/seat";

export class SeatPassenger {
    constructor(
        private passenger: Passenger,
        private seat: Seat
    ) {}

    getPassenger(): Passenger {
        return this.passenger;
    }

    getSeat(): Seat {
        return this.seat;
    }
}
