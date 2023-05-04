<template>

    <MainHeader />
    <MainSideBar />
    <main>
        <RouterView />
    </main>
<!--    <MainFooter />-->
    <ModalContainer/>
    <SnackbarContainer />
</template>

<script setup lang="ts">
import ModalContainer from "@/container/message/ModalContainer.vue";
import SnackbarContainer from "@/container/message/SnackbarContainer.vue";
import MainHeader from "@/container/MainHeader.vue";
import MainSideBar from "@/container/MainSideBar.vue";
import { ref} from "vue";
import {useSidebarStore} from "@/store/ui/UISidebarStore";
import ComparePriceByMall from "@/components/chart/ComparePriceByMall.vue";
import MainFooter from "@/container/MainFooter.vue";

const status = ref(useSidebarStore().status)

</script>

<style scoped lang="scss">
@use "@style/widthbreakpoint" as widthbreakpoint;

main {
    padding-top : 7rem;
    max-width: widthbreakpoint.$WIDTH_BREAK_POINT_TABLE_LABTOP;
    margin: 0 auto;
}


</style>