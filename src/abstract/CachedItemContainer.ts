import { AsyncRequestInfo } from "@/util/AjaxRequestInfo";
import { AsyncProcessService } from "./AsyncProcessService";
import { Optional, Result } from "@yahvz01/monad";


export class CachedItemContainer<_Tp> extends AsyncProcessService {

    private defaultData : _Tp
    private data : _Tp
    constructor(defaultData : _Tp) {
        super();
        this.defaultData = defaultData;
        this.data = defaultData;
    }

    protected getData() : _Tp {
        return this.data
    }
    protected setData( data : _Tp ) : void {
        this.data = data
    }
    protected clear() {
        this.data = this.defaultData
    }
}