import {CachedListContainer} from "@/abstract/CachedListContainer";
import {CreateWishItemDTO, WishItemDTO} from "@/dto/RegisteredProductDTO";
import {Optional} from "@yahvz01/monad";
import {ENDPOINT_OF_WISH_ADD, ENDPOINT_OF_WISH_DELETE} from "@/requestinfo/WishListRequestInfo";

interface WishListServiceInterface {

    // TODO select from server
    clear() : void
    registerItem( createItemDTO : CreateWishItemDTO ) : Promise<Optional<Error>>
    removeItem( index : number ) : Promise<Optional<Error>>
}

const mappingByItem = ( item : WishItemDTO) => (item.id)
export class WishListService extends CachedListContainer<WishItemDTO, number, typeof mappingByItem> implements WishListServiceInterface {
    clear(): void {
        this.clear()
    }

    async registerItem( createItemDTO : CreateWishItemDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO, CreateWishItemDTO>( ENDPOINT_OF_WISH_ADD, createItemDTO)
        if(result.isFailure())
            return Optional.of(result.getError())

        this.add(result.getValue())
        return Optional.empty()
    }

    async removeItem( index: number): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<WishItemDTO, never>( ENDPOINT_OF_WISH_DELETE.append("/index"))
        if(result.isFailure())
            return Optional.of(result.getError())

        this.deleteByBase(index)
        return Optional.empty()
    }
}