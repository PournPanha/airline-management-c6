import { Booking } from "../Booking/booking";
import { Route } from "./Route/Route";

export class Airport {
  private name: string;
  private code: string;
  private country: string;
  private routes: Route[];
  private bookings: Booking[];

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
