import { Person } from "../../Person/Person";
import { Gender } from "../../enum/Gender";
import { Booking } from "../../Booking/booking";
import { Bag } from "./Bag";

export class Passenger extends Person {
    private bags: Bag[] = [];
    private bookings: Booking[] = [];

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        gender: Gender,
        phoneNumber: string,
        nationality: string // nationality added here
    ) {
        super(firstName, lastName, age,gender, phoneNumber,nationality);
    }

    addBag(bag: Bag): void {
        this.bags.push(bag);
    }

    getBags(): Bag[] {
        return this.bags;
    }}
    