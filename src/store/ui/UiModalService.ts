import {defineStore} from "pinia";
import {GlobalMessageService} from "@/service/ui/GlobalMessageService";

export const useModalServiceStore =
    defineStore("modalstore", () => {
        return { service : new GlobalMessageService()}
    })