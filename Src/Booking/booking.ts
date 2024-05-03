import { CreditCard } from "../Person/Passenger/CreditCard";
import { Passenger } from "../Person/Passenger/Passenger";
import { Ticket } from "../Ticket/Ticket";
// import { Flight } from "../Airline/Flight/Flight";
import { Trip } from "../Trip/Trip";

export class Booking {
    private bookingReferenceNumber: string;
    private price: number;
    private passenger: Passenger;
    private ticket: Ticket;
    private trip: Trip;
    // private flights: Flight[];
    private creditCard: CreditCard;
    constructor(
        bookingReferenceNumber: string, 
        price: number, 
        passenger: Passenger, 
        ticket: Ticket
    ) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.price = price;
        this.passenger = passenger;
        this.ticket = ticket;
        // this.flights = [];
    }

    public getReference(): string {
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

    // public addFlight(flight: Flight): void {
    //     this.flights.push(flight);
    // }

    // public getFlights(): Flight[] {
    //     return this.flights;
    // }
    
}
