// Importing classes and enums
import { Booking } from "./Booking/booking";
import { Airport } from "./Airport/Airport";
import { Flight } from "./Airline/Flight/Flight";
import { Ticket } from "./Ticket/Ticket";
import { Passenger } from "./Person/Passenger/Passenger";
import { Gender } from "./enum/Gender";
import { Bag } from "./Person/Passenger/Bag";
import { Seat } from "./Airline/Seat/Seat";
import { DateTime } from "./DateTime/DateTime";
import { Gate } from "./Airport/Gate";
import { Airplane } from "./Airline/Airplane/Airplane";
import { Trip } from "./Trip/Trip";
import { Airline } from "./Airline/Airline";
import { Date } from "./DateTime/Date";

// Create passenger objects
let passenger1 = new Passenger("Kimleang", "Lor", 21, Gender.Male, "0122347634", "Khmer");
let passenger2 = new Passenger("Dyna", "Phung", 20, Gender.Female, "066987645", "Khmer");

// Datetime
let datetime1 = new DateTime(1, 1, 1, 2)

// Create bag object
let bag = new Bag(1, passenger1);

// Create Airport
let airport1 = new Airport("PNCAirport", "2F-code", "USA");

// Gate
let gate = new Gate('A1', airport1)

// Airline 
let LeangAirLine = new Airline("Leang", "2F-code");

// Create Airplane
let plane1 = new Airplane("JSk",LeangAirLine);

// Flight
let flight = new Flight('AY2', plane1, datetime1, datetime1, gate);

// Route

let route = new Route()

// Ticket
let ticket = new Ticket(223, 50);

// Trip
let trip = new Trip(1, 4);
trip.addPassenger(passenger1)
trip.addPassenger(passenger2)

// Booking
let booking = new Booking('AA2', 50, passenger1, ticket)


// ===========================================
// // Create passenger objects
// let passenger1 = new Passenger("Kimleang", "Lor", 21, Gender.Male, "0122347634", "Khmer");
// let passenger2 = new Passenger("Dyna", "Phung", 20, Gender.Female, "066987645", "Khmer");

// // Create bag object
// let bag = new Bag(1, passenger1);

// // Create Airport
// let airport1 = new Airport("PNCAirport", "2F-code", "USA");
// // Airline 
// let LeangAirLine = new Airline("Leang");

// // Create Airplane
// let plane1 = new Airplane("JSk",LeangAirLine);


// // Create Flight
// let flight = new Flight("12A", plane1,
//     new DateTime(12, 12, 2024, 1),
//     new DateTime(12, 12, 2024, 2),
//     new Gate("JSK", airport1),
//     new Trip(12, 3)
// );

// // Create Ticket
// let ticket1 = new Ticket(12, 3);

// // Create Bookings
// let booking1 = new Booking("JS12", 100, passenger1, ticket1);
// let booking2 = new Booking("JS12", 100, passenger2, ticket1); // Assuming same ticket for both bookings


// // Add bag to passenger
// passenger1.addBag(bag);

// // Setting flight for the ticket
// ticket1.setFlight(flight);

// // Adding bookings to the airport
// // airport1.addBooking(booking1);
// // airport1.addBooking(booking2);

// // console.log(airport1.getByRef("JS"));
// // console.log(flight);
// // console.log(passenger1);

// console.log(booking1.passengerDetial("JS12"))
