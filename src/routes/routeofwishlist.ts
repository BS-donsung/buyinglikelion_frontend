import { RouteRecordRaw } from "vue-router";

import WishListPage from "@/view/wishlist/WishListPage.vue"
import WishItemDetailPage from "@/view/wishlist/WishItemDetailPage.vue";

export const wishlistroute : RouteRecordRaw = {
    path : "/wishlist",
    children : [
        {
            // Detail registered wishitem 
            path : ":id", component : WishItemDetailPage
        },
        {
            path : "", component : WishListPage
        }
    ]
}