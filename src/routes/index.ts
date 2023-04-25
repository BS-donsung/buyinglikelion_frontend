import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"



import { authroute } from "./routeofauth";
import { accountbookroute } from "./routeofaccountbook";
import { shoppingroute } from "./routeofshopping";
import { wishlistroute } from "./routeofwishlist";
import { mypageroute } from "./routeofmypage";
import WishListPage from "@/view/wishlist/WishListPage.vue";

const routes : RouteRecordRaw[] = [
    authroute,
    accountbookroute,
    shoppingroute,
    wishlistroute,
    mypageroute,
    {
        path : "/:pathMatcher(.*)*",
        component : WishListPage
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})