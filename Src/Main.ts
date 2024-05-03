// Importing classes and enums
import { Booking } from "./Booking/booking";
import { Airport } from "./Airport/Airport";
import { Flight } from "./Airline/Flight/Flight";
import { Ticket } from "./Ticket/Ticket";
import { Passenger } from "./Person/Passenger/Passenger";
import { Gender } from "./enum/Gender";
import { Bag } from "./Person/Passenger/Bag";
import { Seat } from "./Airline/Seat/seat";
import { DateTime } from "./DateTime/DateTime";
import { Gate } from "./Airport/Gate";
import { Airplane } from "./Airline/Airplane/Airplane";
import { Trip } from "./Trip/Trip";
import { Airline } from "./Airline/Airline";
import { Date } from "./DateTime/Date";
import { SeatPassenger } from "./Airline/SeatPassenger/SeatPassenger";
import { Route } from "./Airport/Route/Route";
import { Pilot } from "./Airline/Pilot/pilot";
import { chef } from "./Person/Employee/chef";
import { coPilot } from "./Person/Employee/CoPilot";
import { flightAttendent } from "./Person/Employee/FlightAttendent";

// Create passenger objects
let passenger1 = new Passenger("Kimleang Lor", 21, Gender.Male, "0122347634", "Khmer");
let passenger2 = new Passenger("Dyna Phung", 20, Gender.Female, "066987645", "UK");
let passenger3 = new Passenger("Panha Po", 12, Gender.Male, "065687645", "USA");
let passenger4 = new Passenger("Liza Doe", 54, Gender.Female, "066347645", "Thai");

// Datetime
let datetime1 = new DateTime(31, 12, 2024, 2);
let datetime2 = new DateTime(15, 10, 2024, 10);
let datetime3 = new DateTime(11, 11, 2024, 8);

// Create bag object
let bag1 = new Bag(1, passenger1);
let bag2 = new Bag(2, passenger2);
let bag3 = new Bag(2, passenger3);
let bag4 = new Bag(2, passenger4);

// Create Airport
let airport1 = new Airport("PNCAirport", "2F-code", "Cambodia");
let airport2 = new Airport("PNVAirport", "5D-code", "Vietnam");

// Gate
let gate1 = new Gate('A1', airport1);
let gate2 = new Gate('A2', airport1);
let gate3 = new Gate('B1', airport2);
let gate4 = new Gate('B2', airport2);

//create object seat
let seat1 = new Seat("168");
let seat2 = new Seat("116");
let seat3 = new Seat("120");

// Airline 
let LeangAirLine = new Airline("Leang Airline", "2F-code");
let DynaAirline = new Airline("Dyna Airline", "2FD-code");

// Ticket
let ticket1 = new Ticket(223, 50);
let ticket2 = new Ticket(220, 49) 

// Trip
let trip = new Trip(1, 4);
trip.addPassenger(passenger1);
trip.addPassenger(passenger2);

// Booking
let booking = new Booking('AA2', 50, passenger1, ticket1);
let booking1 = new Booking('AA2', 50, passenger1, ticket1);
let booking2= new Booking('AA2', 50, passenger2, ticket2);
let booking3 = new Booking('AA2', 50, passenger2, ticket2);


let seatPassenger1 = new SeatPassenger(passenger1, seat1);
let seatPassenger2 = new SeatPassenger(passenger1, seat1);
let seatPassenger3 = new SeatPassenger(passenger1, seat2);
let seatPassenger4 = new SeatPassenger(passenger1, seat2);
let seatPassenger5 = new SeatPassenger(passenger1, seat3);

//create airplane
let plane1 = new Airplane("12", [seat1, seat1, seat1], LeangAirLine);
let plane2 = new Airplane("21", [seat2, seat2, seat2], DynaAirline);

//create object flight
let flight1 = new Flight("14PHP", plane1, datetime1, datetime1, gate1);
flight1.addPassengerSeat(passenger1, seat1)
flight1.addPassengerSeat(passenger2, seat1)
flight1.addPassengerSeat(passenger3, seat2)
flight1.addPassengerSeat(passenger4, seat2)
flight1.addPassengerSeat(passenger4, seat3)
//create object rout
let route1 = new Route(airport1, airport1, flight1);
let route2 = new Route(airport2, airport2, flight1);

airport1.addRoutes(route1);
airport2.addRoutes(route2);

// Create Employees objects
// Create Pilot objects
let pilot1 = new Pilot("Dyna Phung",Gender.Female, 19, "0122347645", "Khmer", 2000, 1);
let pilot2 = new Pilot("Chandy Moeun",Gender.Male, 21, "0122347645", "France", 2000, 2);

// Create chef objects
let chef1 = new chef("Kaka Oli",Gender.Male, 18, "0122347645", "English", 1500);
let chef2 = new chef("John Alex",Gender.Female, 24, "0122347645", "Khmer", 1500);

//Create coPilot objects
let coPilot1 = new coPilot("Jescika Am",Gender.Female, 25, "0122347645", "Khmer", 1800);
let coPilot2 = new chef("Jame Sbone",Gender.Male, 42, "0122347645", "USA", 1800);

//Create flightAttendent objects
let flightAttendent1 = new flightAttendent("Chanthou Voeun",Gender.Female, 19, "0122347645", "Khmer", 3000);
let flightAttendent2 = new flightAttendent("Vanny Chan",Gender.Female, 43, "0122347645", "Khmer", 3000);

// add Employee to airline
LeangAirLine.addEmployee(pilot1);
LeangAirLine.addEmployee(coPilot1);
LeangAirLine.addEmployee(chef1);
LeangAirLine.addEmployee(flightAttendent2);

DynaAirline.addEmployee(pilot2);
DynaAirline.addEmployee(coPilot1);
DynaAirline.addEmployee(chef2);
DynaAirline.addEmployee(flightAttendent2);

// Console log for to know salary that Airline have paid for
console.log(LeangAirLine.getAllSalaryOfEmployees());
console.log(DynaAirline.getAllSalaryOfEmployees());

//Console.log test user story
console.log(airport1.getPassengerBookings());


