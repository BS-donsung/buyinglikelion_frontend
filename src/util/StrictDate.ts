import {join} from "path";

export type MonthRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export class StrictDate {
    year : number
    month : number
    date : number
    private constructor(year : number, month : MonthRange , date : number) {
        this.year = year;
        this.month = year;
        this.date = date;
    }

    toDate() : Date {
        return new Date(`${this.year}/${this.month}/${this.date}`)
    }

    toDateString( joinBy : string = "/") : string {
        return (this.year + joinBy + this.month + joinBy + this.date);
    }

    static of(year : number, month : MonthRange , date : number) : StrictDate {
        return new StrictDate(year, month, date)
    }

    static ofDate( date : Date = new Date() ) : StrictDate {
        return new StrictDate( date.getFullYear(), date.getMonth() + 1 as MonthRange, date.getDate())
    }
}
