import {CachedListContainer} from "@/abstract/CachedListContainer";
import { DeleteWishItemDTO} from "@/dto/RegisteredProductDTO";
import {Optional} from "@yahvz01/monad";
import {
    ENDPOINT_OF_ACCOUNT_ADD,
    ENDPOINT_OF_ACCOUNT_DELETE, ENDPOINT_OF_ACCOUNT_SELECT,
} from "@/requestinfo/AccountBookRequestInfo";
import {AccountItem, AccountItemDTO, mapAccountDTOToItem} from "@/dto/AccountItemDTO";


interface AccountBookServiceInterface {
    // select
    // create
    // update
    // delete

    clear() : void
    addAccount( account : AccountItem) : Promise<Optional<Error>>
    // updateAccount( account : AccountDTO ) : Promise<Optional<Error>>
    deleteAccount( id : number ) : Promise<Optional<Error>>
}

const mapAccountDTOtoId = ( account : AccountItem ) => account.id
export class AccountBookService extends CachedListContainer<AccountItem, number, typeof mapAccountDTOtoId> implements AccountBookServiceInterface{

    async getFullQuery() : Promise<Optional<Error>>
    {
        const result = await this.asyncProcessing<Array<AccountItemDTO>>(ENDPOINT_OF_ACCOUNT_SELECT)
        if(result.isFailure()) {
            return Optional.of(result.getError());
        }
        const queriedAccountDTO = result.getValue()
        queriedAccountDTO.map(mapAccountDTOToItem).forEach( data => this.add(data) )
        return Optional.empty()
    }

    async getQuery(
        month : number = ((new Date()).getMonth() + 1),
        year : number = ((new Date()).getFullYear())) : Promise<Optional<Error>>
    {
        // const uri = ENDPOINT_OF_ACCOUNT_SELECT.appendQuery("month", month.toString()).appendQuery("year", year.toString())
        const uri = ENDPOINT_OF_ACCOUNT_SELECT.appendQuery("month", month.toString()).appendQuery("year", year.toString())
        const result = await this.asyncProcessing<Array<AccountItemDTO>>(uri)
        if(result.isFailure()) {
            return Optional.of(result.getError());
        }
        const queriedAccountDTO = result.getValue()
        queriedAccountDTO.map(mapAccountDTOToItem).forEach( data => this.add(data) )
        return Optional.empty()
    }

    async addAccount(account: AccountItem): Promise<Optional<Error>> {
        this.cache.add(account)
        const result = await this.asyncProcessing<AccountItem, AccountItem>(ENDPOINT_OF_ACCOUNT_ADD, account)
        if(result.isFailure())
            return Optional.of(result.getError())

        this.add(result.getValue())
        return Optional.empty()
    }

    // async updateAccount(account: AccountDTO): Promise<Optional<Error>> {
    //     const result = await this.asyncProcessing<AccountDTO, AccountDTO>(ENDPOINT_OF_ACCOUNT_UPDATE, account)
    //     if(result.isFailure())
    //         return Optional.of(result.getError())
    //     this.update(result.getValue())
    //     return Optional.empty()
    // }

    async deleteAccount(id: number): Promise<Optional<Error>> {
        this.cache.delete(id)
        const result = await this.asyncProcessing<never, DeleteWishItemDTO>(ENDPOINT_OF_ACCOUNT_DELETE, { id })
        if(result.isFailure())
            return Optional.of(result.getError())
        this.deleteByBase(id)
        return Optional.empty()
    }

    getDataWithMonthRange( year : number, month : number) : Array<AccountItem> {
        return this.data.filter( data => (data.date.year === year && data.date.month === month))
    }
    
}