import { ProcessStatus } from "@/util/ProcessState";
import { AsyncRequestInfo, HTTP_METHOD } from "@/util/AjaxRequestInfo"
import { Result } from "@yahvz01/monad"
import { AjaxPendingError } from "@/error/AjaxPendingError";

export interface DefaultResponseEntity {
    status : string,
    message : string
}

export class AsyncProcessService extends ProcessStatus {
    async asyncProcessing<_ResTp, _InpTp>( requestInfo : AsyncRequestInfo, inputData : _InpTp | undefined = undefined) : Promise<Result<_ResTp, Error>> {
        if(this.isPending)
            return Result.failure( new AjaxPendingError() )
        try {
            this.setPending()
            console.log("fetch before")
            const response = await fetch(requestInfo.endpoint, AsyncProcessService.setFetchOption(requestInfo, inputData) )
            console.log("fetch after")
            if(!response.ok) {
                this.setFailure()

                try {
                    const textData = await response.text()
                    const responseEntity : DefaultResponseEntity = JSON.parse(textData)
                    if(responseEntity.message != undefined) {
                        return Result.failure(new Error( responseEntity.message ));
                    }
                } catch ( e ) {
                    return Result.failure(new Error(`Network response was not ok ${response.status}`))
                }
                return Result.failure(new Error(`Network response was not ok ${response.status}`))
            }
            const responseBody = await response.text()

            this.setSuccess()
            if(responseBody.length == 0) {
                return Result.emptyButSucccess()
            } else {
                return Result.success<_ResTp>(JSON.parse(responseBody))
            }
        } catch (e) {
            console.log("error", e)
            this.setFailure()
            return Result.failure(e as Error)
        }
    }

    static setFetchOption<_InpTp>( requestInfo : AsyncRequestInfo, inputData : _InpTp | undefined = undefined) : RequestInit {
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "cache" : "no-cache"
        });
        if( !this.isRequiredBodyRequestMethod(requestInfo.method) || inputData == undefined )
            return { method : requestInfo.method, headers }
        else
            return { method : requestInfo.method, headers, body : JSON.stringify(inputData) }
    }

    static isRequiredBodyRequestMethod( httpRequest : HTTP_METHOD) : boolean {
        if( httpRequest == HTTP_METHOD.GET || httpRequest == HTTP_METHOD.DELETE )
            return false
        else
            return true
    }
}