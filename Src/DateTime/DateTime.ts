import { Date } from "./Date";
export class DateTime extends Date {
    constructor(
        day: number,
        month: number,
        year: number,
        private hour: number
    ) {
        super(day, month, year);
    }

    isEqaulDate(date: Date): boolean {
        return this.day === date.getDay() &&
                this.month === date.getMonth() &&
                this.year === date.getYear();
    }
}