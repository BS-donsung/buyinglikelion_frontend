import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"



import { authroute } from "./routeofauth";
import { accountbookroute } from "./routeofaccountbook";
import { shoppingroute } from "./routeofshopping";
import { wishlistroute } from "./routeofwishlist";
import { mypageroute } from "./routeofmypage";

const routes : RouteRecordRaw[] = [
    authroute,
    accountbookroute,
    shoppingroute,
    wishlistroute,
    mypageroute,
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})