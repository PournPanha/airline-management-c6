import { Flight } from "../Airline/Flight/Flight";
import { TicketType } from "../enum/TicketType";

export class Ticket {
  private flights: Flight[];
  
  constructor(
    private ticketNumber: number,
    private departureDate: number,
  ) {}

  public getTicketNumber(): number {
    return this.ticketNumber;
  }
  public setTicketNumber(ticketNumber: number): void {
    this.ticketNumber = ticketNumber;
  }
  public getDepartureDate(): number {
    return this.departureDate;
  }
  public setDepartureDate(departureDate: number): void {
    this.departureDate = departureDate;
  }
  public setFlight(flight:Flight): void {
    this.flights.push(flight);
  }
  public getFlight(): Flight[] {
    return this.flights;
  }
}
