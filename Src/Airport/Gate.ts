import { Airport } from "./Airport";
export class Gate {
    constructor(
        private gateNumber: string,
        private airport: Airport
    ) {}
}