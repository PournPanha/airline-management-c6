import { Passenger } from "../../Person/Passenger/Passenger";
import { Seat } from "../Seat/seat";

export class PassengerSeat {
    constructor(
        private passenger: Passenger,
        private seat: Seat
    ) {}

    getPassenger(): Passenger {
        return this.passenger;
    }
}