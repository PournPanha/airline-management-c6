import { Person} from "../../Person/Person";
import { Gender } from "../../Person/Person";
export class Passenger extends Person {
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
}
