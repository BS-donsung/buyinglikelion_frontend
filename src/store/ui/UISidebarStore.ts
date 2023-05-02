import {defineStore} from "pinia";
import {ToggleStatus} from "@/util/ToggleStatus";

export const useSidebarStore =
    defineStore("main sidebar store", () => {
        return {
            status : new ToggleStatus(false)
        }
    })