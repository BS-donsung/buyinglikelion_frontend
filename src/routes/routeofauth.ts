import { RouteRecordRaw } from "vue-router";
import AuthLoginPage from "@/view/auth/AuthLoginPage.vue";
import AuthRegisterPage from "@/view/auth/AuthRegisterPage.vue";
import AuthUpdatePage from "@/view/auth/AuthUpdatePage.vue";


export const authroute : RouteRecordRaw = {
    path : "/auth",
    children : [
        {
            path : "login", component : AuthLoginPage
        }, 
        {
            path : "register", component : AuthRegisterPage
        },
        {
            // update page include deactivate
            path : "update", component : AuthUpdatePage
        },
        {
            path : ":pathMatcher(.*)*",
            redirect : "/auth/login"
        }
    ]
}

