import { RouteRecordRaw } from "vue-router";

import MyPage from "@/view/mypage/MyPage.vue";


export const mypageroute : RouteRecordRaw = {
    path : "/mypage", component : MyPage,
    children : [
        {
            path : "update", redirect :"/auth/update"
        }
    ]
}