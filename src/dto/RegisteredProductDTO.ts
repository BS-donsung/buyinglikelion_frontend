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
import {ShoppingMallInfo} from "@/util/ShoppingMallInfo";

export interface CreateWishItemDTO {
    product : string
}

export interface DeleteWishItemDTO {
    id : number
}

export interface MallInfoAndPrice {
    mall : ShoppingMallInfo;
    price: number;
}
export class MallAndPrice {
    mall : string;
    price : number;
}

export interface PriceHistory extends MallAndPrice {
    date : string
}

export class ProductDTO {
    product : string
    image : string
    price : number

    get name() : string {
        return this.product;
    }
}

export class RegisteredProductDTO {
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

export class WishItemDTO extends RegisteredProductDTO {
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

export interface AccountDTO extends RegisteredProductDTO {
    purchase_date : Date
    purchase_price : number

    "price": number,
    "payment" : {
        "method": "cash" | "debit" | "credit",
        "installment": number
    }
}