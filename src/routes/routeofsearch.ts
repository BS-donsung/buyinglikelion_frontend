import { RouteRecordRaw } from "vue-router";
import SearchPage from "@/view/search/SearchPage.vue";

// query processing

export const searchroute : RouteRecordRaw = {
    path : "/search",
    component : SearchPage,
    props : (routes) => ({ query : routes.query.q })

}