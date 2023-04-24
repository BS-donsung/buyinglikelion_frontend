
export class AuthDTO {
    principal : string
    credential : string

    constructor( principal : string, credential : string ) {
        this.principal = principal
        this.credential = credential
    }
}

export class UsernameAndPrincipalDTO {
    username : string
    principal : string
    constructor( username : string, principal : string) {
        this.username = username
        this.principal = principal
    }
}

interface CreateUserDTOInterface {
    username : string
    principal : string
    credential : string
    birth? : string
    gender? : string
}

export class CreateUserDTO implements CreateUserDTOInterface {
    username: string;
    principal: string;
    credential: string;
    gender?: string;
    birth?: string;
    constructor(username : string, email : string, password : string) {
        this.username = username;
        this.principal = email;
        this.credential = password
    }
}

