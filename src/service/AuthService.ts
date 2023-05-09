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

class AuthInfoDetail extends AuthInfo {
    image : string;

    get birth() : string {
        return "19920904"
    }

    get gender() : string {
        return "male"
    }

    constructor( username : string, principal : string, isAuthentication : boolean, image : string) {
        super(username, principal, isAuthentication)
        this.image = image
    }
}

export interface AuthServiceInterface {
    login<E>( authDTO : AuthDTO ) : Promise<Optional<Error>>
    logout() : void 
    register<E>( createUserDTO : CreateUserDTO ) : Promise<Optional<Error>> 
    update<E>( createUserDTO : CreateUserDTO ) : Promise<Optional<Error>> 
    deactivate<E>( credential : string ) : Promise<Optional<Error>> 
}

const DEFAULT_IMAGE = "/assets/default-user-icon.png"

export interface AuthServiceAsyncRequestInfo {
    [key: string]: AsyncRequestInfo;
}

export class AuthService extends CachedItemContainer<AuthInfoDetail> implements AuthServiceInterface {

    requestInfo : AuthServiceAsyncRequestInfo

    constructor( requestInfo : AuthServiceAsyncRequestInfo ) {
        super( new AuthInfoDetail("고객님", "", false, DEFAULT_IMAGE) )
        this.requestInfo = requestInfo;
    }

    get isAuthenticated() : boolean {
        return this.data.isAuthentication
    }
    
    async login(authDTO: AuthDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, AuthDTO>(this.requestInfo["login"], authDTO)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        const value = result.getValue()

        const authInfoData : AuthInfoDetail = {
            username : "James",
            principal : "yahvz01@testtest.com",
            image : "https://kakaoenterprise.com/wp-content/uploads/2022/09/ryan-animation_ver02.gif",
            isAuthentication : true
        }

        this.setData(authInfoData)
        return Optional.empty()
    }
    
    async logout(): Promise<Optional<Error>> {
        const result = await this.asyncProcessing(this.requestInfo["logout"])
        this.clear()
        return Optional.empty()
    }

    async register(createUserDTO: CreateUserDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, CreateUserDTO>(this.requestInfo["register"], createUserDTO)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.setData({ ...result.getValue(), isAuthentication : true, image : DEFAULT_IMAGE })
        return Optional.empty()
    }

    async update(createUserDTO: CreateUserDTO): Promise<Optional<Error>> {
        const result = await this.asyncProcessing<UsernameAndPrincipalDTO, CreateUserDTO>(this.requestInfo["update"], createUserDTO)
        if(result.isFailure()) {
            return Optional.of(result.getError())
        }
        this.setData({ ...result.getValue(), isAuthentication : true, image : DEFAULT_IMAGE })
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