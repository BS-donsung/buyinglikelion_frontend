import {AsyncProcessService} from "@/abstract/AsyncProcessService";
import {AsyncRequestInfo} from "@/util/AjaxRequestInfo";

export interface AsyncGetQueryService<_DataTp> {
    data : _DataTp;
    isEmpty : boolean;
    getQuery(targetURL : AsyncRequestInfo) : Promise<void>
}


export class GetSingularDataService<_DataTp> extends AsyncProcessService implements AsyncGetQueryService<_DataTp>{
    _productInfo : _DataTp | null;
    constructor() {
        super();
        this._productInfo = null;
    }

    get data() : _DataTp {
        return this._productInfo!!
    }

    get isEmpty() : boolean {
        return this._productInfo == null;
    }

    async getQuery(targetURL : AsyncRequestInfo) {
        const result = await this.asyncProcessing<_DataTp>(targetURL)
        if(result.isFailure()) {
            this.setFailure();
        } else {
            this.setSuccess();
            this._productInfo = result.getValue();
        }
    }
}

export class GetQueryMultipleDataService<_DataTp> extends AsyncProcessService implements AsyncGetQueryService<_DataTp>{
    _productInfo : _DataTp[] = []
    constructor( ) {
        super();
    }

    get data() : _DataTp[] {
        return this._productInfo;
    }

    get isEmpty() : boolean {
        return this._productInfo.length == 0;
    }

    async getQuery(targetURL : AsyncRequestInfo) {
        const result = await this.asyncProcessing<_DataTp[]>(targetURL)
        if(result.isFailure()) {
            this.setFailure();
        } else {
            this.setSuccess();
            this._productInfo = result.getValue();
        }
    }
}

