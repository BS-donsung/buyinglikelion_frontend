import {CachedListContainer} from "@/abstract/CachedListContainer";
import {CreateWishItemDTO, WishItem, WishItemDTO} from "@/dto/RegisteredProductDTO";
import {Optional} from "@yahvz01/monad";
import {
    ENDPOINT_OF_WISH_ADD,
    ENDPOINT_OF_WISH_DELETE,
    ENDPOINT_OF_WISH_SELECT
} from "@/requestinfo/WishListRequestInfo";
import {StrictDate} from "@/util/StrictDate";

interface WishListServiceInterface {

    // TODO select from server
    clear() : void
    registerItem( createItemDTO : CreateWishItemDTO ) : Promise<Optional<Error>>
    removeItem( index : number ) : Promise<Optional<Error>>
}

const mappingByItem = ( item : WishItem ) => (item.id)
const mappingWishItemDTOToWishItem = ( dto : WishItemDTO ) => {
    const choiceDate = new Date(dto.choice_date);
    const strictDate = StrictDate.ofDate(choiceDate);
    return WishItem.of(dto.id, dto.product, dto.image, dto.price, strictDate);
}
export class WishListService extends CachedListContainer<WishItem, number, typeof mappingByItem> implements WishListServiceInterface {

    clear(): void {
        super.clear()
    }

    async getQuery() : Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO[]>( ENDPOINT_OF_WISH_SELECT )
        if(result.isFailure()) {
            return Optional.of(result.getError())
        } else {
            const dataset = result.getValue();
            dataset.map( mappingWishItemDTOToWishItem ).forEach( data => this.add(data) )
            return Optional.empty()
        }
    }

    async registerItem( createItemDTO : CreateWishItemDTO ): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO, CreateWishItemDTO>( ENDPOINT_OF_WISH_ADD, createItemDTO )
        if(result.isFailure())
            return Optional.of(result.getError())
        this.add( mappingWishItemDTOToWishItem(result.getValue()) )
        return Optional.empty()
    }

    async removeItem( index: number ): Promise<Optional<Error>> {

        this.delete(index)
        const result = await this.asyncProcessing<WishItemDTO, never>( ENDPOINT_OF_WISH_DELETE.append("/index"))
        if(result.isFailure())
            return Optional.of(result.getError())
        else
            return Optional.empty()
    }

    isRegisteredById( id : number ) : boolean {
        return (this.data.findIndex( data => data.id == id ) > -1);
    }

    isRegisteredByName( productName : string ) : boolean {
        return (this.data.findIndex( data => data.product == productName ) > -1);
    }
}