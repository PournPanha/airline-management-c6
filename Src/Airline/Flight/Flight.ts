import { SeatPassenger } from "../SeatPassenger/SeatPassenger";
import { DateTime } from "../../DateTime/DateTime";
import { Gate } from "../../Airport/Gate";
import { Airplane } from "../Airplane/Airplane";
import { Trip } from "../../Trip/Trip";
import { Passenger } from "../../Person/Passenger/Passenger";
import { Seat } from "../Seat/seat";

export class Flight {
    private passengerSeats: SeatPassenger[] = [];
    constructor(
        private flightNumber: string,
        private airplane: Airplane,
        private departureTime: DateTime,
        private arrivalTime: DateTime,
        private gate: Gate
        // private trip: Trip // Changed variable name to 'trip'
    ) {
        this.flightNumber = flightNumber;
        this.airplane = airplane;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.gate = gate;
        // this.trip = trip;
    }

    addPassengerSeat(passenger: Passenger, seat: Seat) {
        this.passengerSeats.push(new SeatPassenger(passenger, seat));
    }


    getAirplane(){
        return this.passengerSeats;
    }

}