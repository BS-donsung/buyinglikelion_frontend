import {AsyncProcessService} from "./AsyncProcessService";
import {DistinctSet} from "@yahvz01/utilcollection";

export class CachedListContainer<_Tp, _CheckTp, _DataUniquenessCriteriaFunc extends ( item : _Tp ) => _CheckTp> extends AsyncProcessService {

    private checkDistinct : _DataUniquenessCriteriaFunc;
    private cache : DistinctSet<_Tp, _CheckTp>

    get size() : number {
        return this.cache.length;
    }
    get length() : number {
        return this.cache.length;
    }
    constructor( func : _DataUniquenessCriteriaFunc) {
        super();
        this.checkDistinct = func
        this.cache = new DistinctSet<_Tp, _CheckTp>(this.checkDistinct);
    }

    get data() : Array<_Tp> {
        return this.cache.container
    }

    protected add( data : _Tp ) {
        this.cache.add(data)
    }

    protected update( data : _Tp ) {
        this.cache.update(data)
    }

    protected delete( index : _CheckTp ) {
        // this.cache.delete(map(data, this.checkDistinct))
        this.cache.delete(index);

    }
    protected clear() : void {
        this.cache.clear()
    }
}