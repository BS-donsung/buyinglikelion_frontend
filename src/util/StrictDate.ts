export type CusMonth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export class StrictDate {
    year : number
    month : number
    date : number
    private constructor(year : number, month : CusMonth , date : number) {
        this.year = year;
        this.month = year;
        this.date = date;
    }
    private constructor( date : Date) {
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1;
        this.date = date.getDate()
    }

    static of(year : number, month : CusMonth , date : number) : StrictDate {
        return new StrictDate(year, month, date)
    }

    static ofDate( date : Date = new Date() ) : StrictDate {
        return new StrictDate( date )
    }
}
