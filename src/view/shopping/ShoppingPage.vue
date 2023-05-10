<template>
    <div class="shoppingcontainer">
        <MainShoppingBanner />
    </div>
</template>

<script setup lang="ts">
import MainShoppingBanner from "@/ui-componenet/banner/MainShoppingBanner.vue";

</script>

<style scoped>

.shoppingcontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

</style>