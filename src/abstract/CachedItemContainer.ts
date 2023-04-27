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

    getData() : _Tp {
        return this.data
    }
    setData( data : _Tp ) : void {
        this.data = data
    }
    protected clear() {
        this.data = this.defaultData
    }
}