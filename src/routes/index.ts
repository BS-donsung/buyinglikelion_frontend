import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"



import { authroute } from "./routeofauth";
import { accountbookroute } from "./routeofaccountbook";
import { shoppingroute } from "./routeofshopping";
import { wishlistroute } from "./routeofwishlist";
import { mypageroute } from "./routeofmypage";
import {searchroute} from "@/routes/routeofsearch";
import MainPage from "@/view/MainPage.vue";

const routes : RouteRecordRaw[] = [
    authroute,
    accountbookroute,
    shoppingroute,
    wishlistroute,
    mypageroute,
    searchroute,
    {
        path : "/:pathMatcher(.*)*",
        component : MainPage
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})