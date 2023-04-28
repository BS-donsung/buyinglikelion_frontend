<template>
    <MainHeader />
    <section>
        <RouterView />
    </section>
    <MainFooter />
    <ModalContainer/>
</template>

<script setup lang="ts">
import MainHeader from "@/container/MainHeader.vue";
import MainFooter from "@/container/MainFooter.vue";
import ModalContainer from "@/container/ui/ModalContainer.vue";

</script>

<style scoped lang="scss">
section {
    padding-top : 5rem;
}


</style>