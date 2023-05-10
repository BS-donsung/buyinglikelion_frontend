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
import SampleLineChart from "@/ui-componenet/banner/SampleChart/SampleLineChart.vue";
import {useSnackbarService} from "@/store/ui/UISnackbarService";


</script>

<style scoped lang="scss">
@use "@style/widthbreakpoint" as widthbreakpoint;

main {
    padding-top : 6.4rem;
    max-width: widthbreakpoint.$WIDTH_BREAK_POINT_TABLE_LABTOP;
    margin: 0 auto;
}


</style>