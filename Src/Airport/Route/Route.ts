import { Airport } from "../Airport";
import { Flight } from "../../Airline/Flight/Flight";
export class Route {
    constructor(
        private departurePlace: Airport,
        private arrivalPlace: Airport,
        private flight: Flight,
    ){}

    getFlight(){
        return this.flight.getAirplane();
    }
}