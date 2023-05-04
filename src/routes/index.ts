import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"



import { authroute } from "./routeofauth";
import { accountbookroute } from "./routeofaccountbook";
import { shoppingroute } from "./routeofshopping";
import { wishlistroute } from "./routeofwishlist";
import { mypageroute } from "./routeofmypage";
import {searchRoute} from "@/routes/routeofsearch";
import MainPage from "@/view/MainPage.vue";
import {productroute} from "@/routes/routeofproductdetails";

const routes : RouteRecordRaw[] = [
    authroute,
    productroute,
    accountbookroute,
    shoppingroute,
    wishlistroute,
    mypageroute,
    searchRoute,
    {
        path : "/:pathMatcher(.*)*",
        component : MainPage
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})