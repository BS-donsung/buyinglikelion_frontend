import { RouteRecordRaw } from "vue-router";
import AccountBookPage from "@/view/accountbook/AccountBookPage.vue";


export const accountbookroute : RouteRecordRaw = {
    path : "/accountbook",
    children : [
        {
            path : ":id",
            component : AccountBookPage,
            props : (routes) => ({ id : routes.params.id })
        },
        {
            path : "",
            component : AccountBookPage
        }
    ]
}