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

export interface WishItemDTO extends Product {
    lower_price : number
    priority : number
    choice_date : Date
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