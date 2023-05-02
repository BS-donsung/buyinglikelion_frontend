import {defineStore} from "pinia";
import {GlobalMessageService} from "@/service/ui/GlobalMessageService";

export const useSnackbarService =
    defineStore("snackbar", () => {
        return { service : new GlobalMessageService() };
    })