import {ButtonInTabInterface} from "@/components/tab/ButtonTab.vue";

export type SortingAlgorithm<_Tp> = ( lhs : _Tp, rhs : _Tp) => number
export class SortingButtonInterfaceImpl<_Tp> implements ButtonInTabInterface {
    readonly title: string;
    readonly value: string;
    readonly sort : SortingAlgorithm<_Tp>

    constructor(title : string, value : string, sortAlgorithm : SortingAlgorithm<_Tp>) {
        this.title = title;
        this.value = value;
        this.sort = sortAlgorithm;
    }

    static of<_Tp>(title : string, value : string, sortAlgorithm : SortingAlgorithm<_Tp> = ( lhs, rhs) => -1) {
        return new SortingButtonInterfaceImpl(title, value, sortAlgorithm);
    }

}