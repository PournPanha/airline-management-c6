import { CreditCard } from "../Person/Passenger/CreditCard";
import { Passenger } from "../Person/Passenger/Passenger";
import { Ticket } from "../Ticket/Ticket";
import { Trip } from "../Trip/Trip";
import { MealType } from "../enum/MealType";    

export class Booking {
    private bookingReferenceNumber: string;
    private price: number;
    private passenger: Passenger;
    private ticket: Ticket;
    private trip: Trip;
    private creditCard: CreditCard;
    private meal?: MealType;
    constructor(
        bookingReferenceNumber: string, 
        price: number, 
        passenger: Passenger, 
        ticket: Ticket,
        meal?: MealType,
    ) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.price = price;
        this.passenger = passenger;
        this.ticket = ticket;
    }

    public getReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    public getPrice(): number {
        return this.price;
    }

    public getPassenger(): Passenger {
        return this.passenger;
    }

    public getTicket(): Ticket {
        return this.ticket;
    }
    public getMeal() {
        return this.meal;
    }

    
}
