import { PassengerSeat } from "../SeatPassenger/SeatPassenger";
import { DateTime } from "../../DateTime/DateTime";
import { Gate } from "../../Airport/Gate";
import { Airplane } from "../Airplane/Airplane";
import { Trip } from "../../Trip/Trip";
import { Passenger } from "../../Person/Passenger/Passenger";
import { Seat } from "../Seat/Seat";

export class Flight {
    private passengerSeats: PassengerSeat[] = [];

    constructor(
        private flightNumber: string,
        private aeroplane: Airplane,
        private startTime: DateTime,
        private endTime: DateTime,
        private gate: Gate,
        // private trip: Trip // Changed variable name to 'trip'
    ) {
        this.flightNumber = flightNumber;
        this.aeroplane = aeroplane;
        this.startTime = startTime;
        this.endTime = endTime;
        this.gate = gate;
        // this.trip = trip;
    }

    addPassengerSeat(passenger: Passenger, seat: Seat) {
        this.passengerSeats.push(new PassengerSeat(passenger, seat));
    }

    getPassengerSeats(): PassengerSeat[] {
        return this.passengerSeats;
    }

    getGate(): Gate {
        return this.gate;
    }
    getFlightNumber(): string {
        return this.flightNumber;
    }
    getStartTime(): DateTime {
        return this.startTime;
    }
    getEndTime(): DateTime {
        return this.endTime;
    }
    getAeroplane(): Airplane {
        return this.aeroplane;
    }
}