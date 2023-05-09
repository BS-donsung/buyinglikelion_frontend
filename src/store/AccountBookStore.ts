import {defineStore} from "pinia";
import {AccountBookService} from "@/service/AccountBookService";
import {AccountItem} from "@/dto/AccountItemDTO";

export const useAccountBookService =
    defineStore("accountbook", () => {
        const service = new AccountBookService( ( item : AccountItem ) => item.id );
        return { service };
    })