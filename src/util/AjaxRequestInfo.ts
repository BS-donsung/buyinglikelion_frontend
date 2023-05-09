export enum HTTP_METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export class AsyncRequestInfo {
    readonly method : HTTP_METHOD
    readonly endpoint : string
    private appendedQuery : boolean

    static empty() : AsyncRequestInfo {
        return new AsyncRequestInfo(HTTP_METHOD.GET, "")
    }

    static of( method : HTTP_METHOD, endpoint : string = "/") : AsyncRequestInfo {
        return new AsyncRequestInfo(method, endpoint)
    }

    constructor(method : HTTP_METHOD , endpoint : string) {
        this.method = method;
        this.endpoint = endpoint
        this.appendedQuery = false;
    }

    setHostExplicitly( host : string ) {
        return new AsyncRequestInfo(this.method, `${host}${this.endpoint}`)
    }
    append( query : string ) : AsyncRequestInfo {
        return AsyncRequestInfo.of(this.method, `${this.endpoint}${query}`)
    }

    appendQuery( key : string, value : string ) : AsyncRequestInfo {
        if(this.appendedQuery) {
            this.append(`&${key}=${value}`);
        } else {
            this.appendedQuery = true;
            return this.append(`?${key}=${value}`)
        }

    }
}
