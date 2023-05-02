import {defineStore} from "pinia";
import {GlobalMessageService} from "@/service/ui/GlobalMessageService";
import {Message} from "@/util/ModalMessage";

export const useModalServiceStore =
    defineStore("modalstore", () => {
        return { service : new GlobalMessageService<Message>()}
    })