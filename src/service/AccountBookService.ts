import {CachedListContainer} from "@/abstract/CachedListContainer";
import {AccountDTO, DeleteWishItemDTO} from "@/dto/RegisteredProductDTO";
import {Optional} from "@yahvz01/monad";
import {
    ENDPOINT_OF_ACCOUNT_ADD,
    ENDPOINT_OF_ACCOUNT_DELETE,
    ENDPOINT_OF_ACCOUNT_UPDATE
} from "@/requestinfo/AccountBookRequestInfo";
import {map} from "@/util/Functional";


interface AccountBookServiceInterface {
    // select
    // create
    // update
    // delete

    clear() : void
    addAccount( account : AccountDTO) : Promise<Optional<Error>>
    updateAccount( account : AccountDTO ) : Promise<Optional<Error>>
    deleteAccount( id : number ) : Promise<Optional<Error>>
}

const mapAccountDTOtoId = ( account : AccountDTO ) => account.id
export class AccountBookService extends CachedListContainer<AccountDTO, number, typeof mapAccountDTOtoId> implements AccountBookServiceInterface{

    async addAccount(account: AccountDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<AccountDTO, AccountDTO>(ENDPOINT_OF_ACCOUNT_ADD, account)
        if(result.isFailure())
            return Optional.of(result.getError())

        this.add(result.getValue())

        return Optional.empty()
    }

    async updateAccount(account: AccountDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<AccountDTO, AccountDTO>(ENDPOINT_OF_ACCOUNT_UPDATE, account)
        if(result.isFailure())
            return Optional.of(result.getError())

        this.update(result.getValue())
        return Optional.empty()
    }

    async deleteAccount(id: number): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<never, DeleteWishItemDTO>(ENDPOINT_OF_ACCOUNT_DELETE, { id })
        if(result.isFailure())
            return Optional.of(result.getError())
        this.deleteByBase(id)
        return Optional.empty()
    }


    
}