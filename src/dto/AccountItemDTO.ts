import {StrictDate} from "@/util/StrictDate";
import {RegisteredProductDTO} from "@/dto/RegisteredProductDTO";


export interface AccountItemDTO extends RegisteredProductDTO {
    choice_date : string
}

export interface AccountItem extends RegisteredProductDTO {
    date : StrictDate
    // payment : {
    //     "method": "cash" | "debit" | "credit",
    //     "installment": number
}

export const mapAccountDTOToItem = ( dto : AccountItemDTO ) : AccountItem => {
    return {
        id : dto.id,
        product : dto.product,
        image : dto.image,
        price : dto.price,
        date : StrictDate.ofDate(new Date(dto.choice_date))
    }

}