import { CachedItemContainer } from "@/abstract/CachedItemContainer";
import { AuthDTO, CreateUserDTO, UsernameAndPrincipalDTO } from "@/dto/UserDTO";
import { AsyncRequestInfo } from "@/util/AjaxRequestInfo";
import { Optional } from "@yahvz01/monad";


class AuthInfo extends UsernameAndPrincipalDTO {
    isAuthentication : boolean
    constructor( username : string, principal : string, isAuthentication : boolean) {
        super(username, principal)
        this.isAuthentication = isAuthentication
    }
}

export interface AuthServiceInterface {
    login<E>( authDTO : AuthDTO ) : Promise<Optional<Error>>
    logout() : void 
    register<E>( createUserDTO : CreateUserDTO ) : Promise<Optional<Error>> 
    update<E>( createUserDTO : CreateUserDTO ) : Promise<Optional<Error>> 
    deactivate<E>( credential : string ) : Promise<Optional<Error>> 
}

export interface AuthServiceAsyncRequestInfo {
    [key: string]: AsyncRequestInfo;
}
// const authRequests: string[] = ["login", "logout", "register", "update", "deactivate"];

export class AuthService extends CachedItemContainer<AuthInfo> implements AuthServiceInterface {

    requestInfo : AuthServiceAsyncRequestInfo

    constructor( requestInfo : AuthServiceAsyncRequestInfo ) {
        super( new AuthInfo("", "", false) )
        this.requestInfo = requestInfo;
    }

    get isAuthenticated() : boolean {
        return this.getData().isAuthentication
    }
    
    async login(authDTO: AuthDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, AuthDTO>(this.requestInfo["login"], authDTO)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.setData({ ...result.getValue(), isAuthentication : true })
        return Optional.empty()
    }
    
    async logout(): Promise<Optional<Error>> {
        const result = await this.asyncProcessing(this.requestInfo["logout"])
        this.clear()
        return Optional.empty()
    }

    async register(createUserDTO: CreateUserDTO): Promise<Optional<Error>> {
        console.log(createUserDTO)
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, CreateUserDTO>(this.requestInfo["register"], createUserDTO)
        console.log(result)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.setData({ ...result.getValue(), isAuthentication : true })
        return Optional.empty()
    }

    async update(createUserDTO: CreateUserDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, CreateUserDTO>(this.requestInfo["update"], createUserDTO)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.setData({ ...result.getValue(), isAuthentication : true })
        return Optional.empty()
    }
    
    async deactivate(credential: string): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<never, { credential : string }>(this.requestInfo["deactivate"], { credential });
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.clear();
        return Optional.empty()
    }
}