//
// export interface NamePrice {
//     product : string
//     price: number
// }
// export interface LowerPrice extends NamePrice {
//     product : string;
//     price : number;
//     date : Date
// }
//
// export interface NameTag {
//     product : string
//     tags : Array<string>
// }
//
// export interface LowerPriceByMall extends LowerPrice {
//     product : string
//     price : number
//     date : Date
//     mall : string
// }

export interface CreateWishItemDTO {
    url : string
}

export interface DeleteWishItemDTO {
    id : number
}

export interface Product {
    id : number
    product :  string
    image_url : string
}

export class WishItemDTO implements Product {
    id : number;
    product : string;
    image_url : string;
    lowest_price : number
    choice_date : Date

    private constructor(id : number, name : string, image_uri : string, lowest_price : number, choice_date : Date) {
        this.id = id;
        this.product = name;
        this.image_url = image_uri;
        this.lowest_price = lowest_price;
        this.choice_date = choice_date;
    }

    static of(id : number, name : string, image_uri : string, lowest_price : number, choice_date : Date = new Date()) : WishItemDTO {
        return new WishItemDTO(id, name, image_uri, lowest_price, choice_date);
    }
}

export interface AccountDTO extends Product {
    purchase_date : Date
    purchase_price : number

    "price": number,
    "payment" : {
        "method": "cash" | "debit" | "credit",
        "installment": number
    }
}