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

export interface Product {
    id : number
    product :  string
    image_url : string
}

export class WishItemDTO implements Product {
    id : number;
    product : string;
    image_url : string;
    lowest_price : number;
    choice_date : StrictDate;

    get name() : string {
        return this.product
    }


    private constructor(id : number, name : string, image_uri : string, lowest_price : number, choice_date : StrictDate) {
        this.id = id;
        this.product = name;
        this.image_url = image_uri;
        this.lowest_price = lowest_price;
        this.choice_date = StrictDate;
    }

    static of(id : number, name : string, image_uri : string, lowest_price : number, choice_date : StrictDate = StrictDate.ofDate()) : WishItemDTO {
        return new WishItemDTO(id, name, image_uri, lowest_price, choice_date);
    }
}

WishItemDTO.of(1, "name", "url", 30000)

export interface AccountDTO extends Product {
    purchase_date : Date
    purchase_price : number

    "price": number,
    "payment" : {
        "method": "cash" | "debit" | "credit",
        "installment": number
    }
}