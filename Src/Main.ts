import { Passenger} from "./Person/Passenger/Passenger";
import { Booking} from "./Booking/booking";
import { Gender } from "./enum/Gender";

let passenger1 = new Passenger("Kemleang", "Lor", 25,Gender.Male, "08123456789", "Nigerian");
console.log(passenger1.getBookings());
