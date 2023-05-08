export type MonthRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export class StrictDate {
    year : number
    month : number
    date : number
    private constructor(year : number, month : MonthRange , date : number) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    toString() : string {
        return `${this.year}/${this.month}/${this.date}`;
    }
    toComparable() : number {
        return this.year * 10000 + this.month * 100 + this.date;
    }
    static of(year : number, month : MonthRange , date : number) : StrictDate {
        return new StrictDate(year, month, date)
    }

    static ofDate( date : Date = new Date() ) : StrictDate {
        return new StrictDate( date.getFullYear(), date.getMonth() + 1 as MonthRange, date.getDate())
    }
}