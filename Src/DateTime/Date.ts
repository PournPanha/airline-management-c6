export class Date {
    constructor(
        protected day: number,
        protected month: number,
        protected year: number
    ) {}

    getDay(): number {
        return this.day;
    }
    getMonth(): number {
        return this.month;
    }
    getYear(): number {
        return this.year;
    }
}