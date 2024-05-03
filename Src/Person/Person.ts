import { Gender } from "../enum/Gender";

export abstract class Person {
    constructor(
        protected name: string,
        protected age: number,
        protected gender:Gender,
        protected phoneNumber: string,
        protected nationality: string 
    ) {}

}