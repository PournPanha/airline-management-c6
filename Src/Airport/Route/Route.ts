import { Airport } from "../Airport";
export class Route{
    constructor(
        private departurePlace: Airport,
        private arrivalPlace: Airport,
    ){}
}