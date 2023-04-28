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

import {StrictDate} from "@/util/StrictDate";

export interface CreateWishItemDTO {
    url : string
}

export interface DeleteWishItemDTO {
    id : number
}

export class ProductDTO {
    id : number
    product :  string
    image : string
    price : number

    get name() : string {
        return this.product;
    }
    constructor(id : number, name : string, image : string, price : number) {
        this.id = id;
        this.product = name;
        this.image = image;
        this.price = price
    }
}

export class WishItemDTO extends ProductDTO {
    choice_date : StrictDate;

    get name() : string {
        return this.product
    }

    private constructor(id : number, name : string, image : string, price : number, choice_date : StrictDate) {
        super(id, name, image, price)
        this.choice_date = choice_date;
    }

    static of(id : number, name : string, image : string, price : number, choice_date : StrictDate = StrictDate.ofDate()) : WishItemDTO {
        return new WishItemDTO(id, name, image, price, choice_date);
    }

}

WishItemDTO.of(1, "name", "url", 30000)

export interface AccountDTO extends ProductDTO {
    purchase_date : Date
    purchase_price : number

    "price": number,
    "payment" : {
        "method": "cash" | "debit" | "credit",
        "installment": number
    }
}