import {defineStore} from "pinia";
import {SingletonModalService} from "@/service/ui/SingletonModalService";

export const useModalServiceStore =
    defineStore("modalstore", () => {
        const modalService = new SingletonModalService()
        return {
            modalService
        }
    })