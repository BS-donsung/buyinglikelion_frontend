import {defineStore} from "pinia";
import {GlobalMessageService} from "@/service/ui/GlobalMessageService";
import {SnackbarMessage} from "@/util/SnackbarMessage";

export const useSnackbarService =
    defineStore("snackbar", () => {
        return { service : new GlobalMessageService<SnackbarMessage>() };
    })