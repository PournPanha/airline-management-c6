import { Passenger } from "../Person/Passenger/Passenger";
import { Bag } from "../Person/Passenger/Bag";
export class Trip {
    private passengers?: Passenger[];
    private bags?: Bag[];

    constructor(
        private departureTime: number,
        private arrivalTime: number, 
        // private placeVisit: string 
    ) {}

    addPassenger(passenger: Passenger) {
        this.passengers?.push(passenger);
    }
}