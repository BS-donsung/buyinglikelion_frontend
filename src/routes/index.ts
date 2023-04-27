import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"



import { authroute } from "./routeofauth";
import { accountbookroute } from "./routeofaccountbook";
import { shoppingroute } from "./routeofshopping";
import { wishlistroute } from "./routeofwishlist";
import { mypageroute } from "./routeofmypage";
import WishListPage from "@/view/wishlist/WishListPage.vue";
import {searchroute} from "@/routes/routeofsearch";

const routes : RouteRecordRaw[] = [
    authroute,
    accountbookroute,
    shoppingroute,
    wishlistroute,
    mypageroute,
    searchroute,
    {
        path : "/:pathMatcher(.*)*",
        component : WishListPage
    }
]

export const router = createRouter({
    history : createWebHistory(),
    routes
})