import {CachedListContainer} from "@/abstract/CachedListContainer";
import {CreateWishItemDTO, WishItemDTO} from "@/dto/RegisteredProductDTO";
import {Optional} from "@yahvz01/monad";
import {
    ENDPOINT_OF_WISH_ADD,
    ENDPOINT_OF_WISH_DELETE,
    ENDPOINT_OF_WISH_SELECT
} from "@/requestinfo/WishListRequestInfo";

interface WishListServiceInterface {

    // TODO select from server
    clear() : void
    registerItem( createItemDTO : CreateWishItemDTO ) : Promise<Optional<Error>>
    removeItem( index : number ) : Promise<Optional<Error>>
}

const mappingByItem = ( item : WishItemDTO) => (item.id)
export class WishListService extends CachedListContainer<WishItemDTO, number, typeof mappingByItem> implements WishListServiceInterface {

    clear(): void {
        super.clear()
    }

    async getQuery() : Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO[]>( ENDPOINT_OF_WISH_SELECT )
        if(result.isFailure()) {
            return Optional.of(result.getError())
        } else {
            const dataset = result.getValue();
            dataset.forEach( data => this.add(data) )
            return Optional.empty()
        }
    }

    async registerItem( createItemDTO : CreateWishItemDTO ): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO, CreateWishItemDTO>( ENDPOINT_OF_WISH_ADD, createItemDTO )
        if(result.isFailure())
            return Optional.of(result.getError())
        this.add(result.getValue())
        return Optional.empty()
    }

    async removeItem( index: number ): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO, never>( ENDPOINT_OF_WISH_DELETE.append("/index"))
        if(result.isFailure())
            return Optional.of(result.getError())

        this.deleteByBase(index)
        return Optional.empty()
    }

    isRegistered( productName : string ) : boolean {
        return (this.getDataList().findIndex( data => data.product == productName ) > -1);
    }
}