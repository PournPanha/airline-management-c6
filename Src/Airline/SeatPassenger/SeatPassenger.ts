import { Passenger } from "../../Person/Passenger/Passenger";
import { Seat } from "../Seat/Seat";

export class PassengerSeat {
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
