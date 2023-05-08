import { AsyncRequestInfo } from "@/util/AjaxRequestInfo";
import { AsyncProcessService } from "./AsyncProcessService";
import { Optional, Result } from "@yahvz01/monad";


export class CachedItemContainer<_Tp> extends AsyncProcessService {

    private defaultData : _Tp
    private _data : _Tp

    get data() : _Tp {
        return this._data;
    }
    constructor(defaultData : _Tp) {
        super();
        this.defaultData = defaultData;
        this._data = defaultData;
    }

    setData( data : _Tp ) : void {
        this._data = data
    }
    protected clear() {
        this._data = this.defaultData
    }
}