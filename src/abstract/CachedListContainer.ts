import {AsyncProcessService} from "./AsyncProcessService";

import {DistinctSet} from "@/util/DistinctSet";
import {map} from "@/util/Functional";

export class CachedListContainer<_Tp, _CheckTp, _DataUniquenessCriteriaFunc extends ( item : _Tp ) => _CheckTp> extends AsyncProcessService {

    private checkDistinct : _DataUniquenessCriteriaFunc;
    private cache : DistinctSet<_Tp, _DataUniquenessCriteriaFunc>

    get size() : number {
        return this.cache.length;
    }
    get length() : number {
        return this.cache.length;
    }
    constructor( func : _DataUniquenessCriteriaFunc) {
        super();
        this.checkDistinct = func
        this.cache = new DistinctSet<_Tp, _DataUniquenessCriteriaFunc>(this.checkDistinct);
    }

    getDataList() : Array<_Tp> {
        return this.cache.container
    }

    protected add( data : _Tp ) {
        this.cache.add(data)
    }

    protected update( data : _Tp ) {
        this.cache.update(data)
    }

    protected delete( data : _Tp ) {
        this.cache.delete(map(data, this.checkDistinct))
    }

    protected deleteByBase(base : _CheckTp) {
        this.cache.deleteByBase(base);
    }

    protected clear() : void {
        this.cache.clear()
    }
}