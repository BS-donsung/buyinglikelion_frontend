import { RouteRecordRaw } from "vue-router";
import SearchPage from "@/view/search/SearchPage.vue";
import WishItemDetailPage from "@/view/wishlist/WishItemDetailPage.vue";
import WishListPage from "@/view/wishlist/WishListPage.vue";

// query processing

// export const searchroute : RouteRecordRaw = {
//     path : "/search",
//     component : SearchPage,
//     props : (routes) => ({ query : routes.query.q })
//
// }

export const searchRoute : RouteRecordRaw = {
    path : "/search",
    component : SearchPage,
    children : [
        {
            // Detail registered wishitem
            path : "product",
            component : SearchPage
        }
    ]
}