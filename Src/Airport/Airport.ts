import { Airline } from "../Airline/Airline";
import { Booking } from "../Booking/booking";
import { Gate } from "./Gate";
import { Route } from "./Route/Route";

export class Airport {
  private name: string;
  private country: string;
  private code: string;
  private routes: Route[];
  private bookings: Booking[];
  private gates: Gate[];
  private airplanes: Airline[]= [];
  constructor(name: string, code: string, country: string) {
    this.name = name;
    this.code = code;
    this.country = country;
    this.bookings = [];
  }

  

  public addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }
  public getByRef(ref:string) {
    for (let book of this.bookings) {
      return book;
    }
  }
  public getBookings(): Booking[] {
    return this.bookings;
  }
  public getName(): string {
    return this.name;
  }
}
