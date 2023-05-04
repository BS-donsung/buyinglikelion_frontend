import {RouteRecordRaw} from "vue-router";
import WishItemDetailPage from "@/view/wishlist/WishItemDetailPage.vue";
import WishListPage from "@/view/wishlist/WishListPage.vue";

export const productroute : RouteRecordRaw = {
    path : "/product",
    children : [
        {
            // Detail registered wishitem
            path : "",
            component : WishItemDetailPage,
            props : (route) => ({ url : route.query.url })
        },
        {
            // Detail registered wishitem
            path : "",
            component : WishListPage,
            props : (route) => ({ tag : route.query.tag })
        },
    ]
}