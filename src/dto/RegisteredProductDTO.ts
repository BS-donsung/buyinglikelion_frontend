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
export interface MallInfoAndPriceDTO {
    mall : string;
    price: number;
    url : string
}
export interface MallInfoAndPrice {
    mall : ShoppingMallInfo;
    price: number;
    url : string
}

export class MallInfoAndPriceImpl implements MallInfoAndPrice{
    mall : ShoppingMallInfo;
    price: number;
    url : string
    constructor( mall : ShoppingMallInfo, price: number, url : string ) {
        this.mall = mall;
        this.price = price;
        this.url = url;
    }
}


export class MallAndPrice {
    mall : string;
    price : number;
}

export interface PriceHistory extends MallAndPrice {
    date : string
}

export interface ProductDTO {
    product : string
    image : string
    price : number
}

export interface ProductWithURLDTO extends ProductDTO{
    url : string
}

export interface RegisteredProductDTO {
    id : number
    product :  string
    image : string
    price : number
}

export interface WishItemDTO extends RegisteredProductDTO {
    choice_date : string
}

export class WishItem {
    id : number
    name : string
    image : string
    price : number
    choice_date : StrictDate;

    private constructor(id : number, name : string, image : string, price : number, choice_date : StrictDate) {
        this.id = id;
        this.name = name
        this.image = image
        this.price = price
        this.choice_date = choice_date;
    }

    static of(id : number, name : string, image : string, price : number, choice_date : StrictDate = StrictDate.ofDate()) : WishItem {
        return new WishItem(id, name, image, price, choice_date);
    }

    toDTO() : WishItemDTO {
        const { id, name, image, price } = this;
        return { id, product : name, image, price, choice_date : this.choice_date.toString()}
    }
}

