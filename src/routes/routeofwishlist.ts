import { RouteRecordRaw } from "vue-router";

import WishListPage from "@/view/wishlist/WishListPage.vue"

export const wishlistroute : RouteRecordRaw = {
    path : "/wishlist",
    children : [
        {
            // Detail registered wishitem 
            path : ":id", component : WishListPage, props : (route) => ({ id : route.params.id })
        },
        {
            path : "", component : WishListPage
        }
    ]
}