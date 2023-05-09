<template>
    Shopping
    <div class="shoppingcontainer">

        <VerticalImageListComponent title="방금 사자들이 구매한 아이템" items="" />

    </div>
</template>

<script setup lang="ts">
import VerticalImageListComponent from "@/ui-componenet/VerticalImageListComponent.vue";



</script>

<style scoped>

.shoppingcontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

</style>