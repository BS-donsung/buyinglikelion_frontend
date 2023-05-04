import {AsyncProcessService} from "@/abstract/AsyncProcessService";
import {AsyncRequestInfo} from "@/util/AjaxRequestInfo";

export interface OnceAsyncGetQueryService<_DataTp> {
    data : _DataTp;
    isEmpty : boolean;
    getQuery() : Promise<void>
}


export class GetQuerySingularDataService<_DataTp> extends AsyncProcessService implements OnceAsyncGetQueryService<_DataTp>{
    endpoint : AsyncRequestInfo;
    _productInfo : _DataTp | null;
    constructor( targetURL : AsyncRequestInfo ) {
        super();
        this.endpoint = targetURL;
        this._productInfo = null;
    }

    get data() : _DataTp {
        return this._productInfo!!
    }

    get isEmpty() : boolean {
        return this._productInfo == null;
    }

    async getQuery() {
        const result = await this.asyncProcessing<_DataTp>(this.endpoint)
        if(result.isFailure()) {
            this.setFailure();
        } else {
            this.setSuccess();
            this._productInfo = result.getValue();
        }
    }
}

export class GetQueryMultipleDataService<_DataTp> extends AsyncProcessService implements OnceAsyncGetQueryService<_DataTp>{
    endpoint : AsyncRequestInfo;
    _productInfo : _DataTp[] = []
    constructor( targetURL : AsyncRequestInfo ) {
        super();
        this.endpoint = targetURL;
    }

    get data() : _DataTp[] {
        return this._productInfo;
    }

    get isEmpty() : boolean {
        return this._productInfo.length == 0;
    }

    async getQuery() {
        const result = await this.asyncProcessing<_DataTp[]>(this.endpoint)
        if(result.isFailure()) {
            this.setFailure();
        } else {
            this.setSuccess();
            this._productInfo = result.getValue();
        }
    }
}

