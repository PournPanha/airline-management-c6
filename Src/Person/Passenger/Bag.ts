import { Passenger } from "./Passenger";

export class Bag {
    constructor(
        private BageNumber: number,
        private owner: Passenger,
    ) {}

    getBagNumber() {
        return this.BageNumber
    }
    setBagNumber(BageNumber: number) {
        this.BageNumber = BageNumber
    }
}
