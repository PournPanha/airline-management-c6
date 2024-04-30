import { Person} from "../../Person/Person";
import { Gender } from "../../enum/Gender";
import { Booking } from "../../Booking/booking";
export class Passenger extends Person {
    private booking: Booking[]=[];
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        Gender: Gender,
        phoneNumber: string,
        nationality: string
    ) {
        super(firstName, lastName, age, phoneNumber, nationality);
    }
    getBookings():Booking[]{    
        return this.booking;
    }
    addBooking(booking: Booking){
        this.booking.push(booking);
    }
}
