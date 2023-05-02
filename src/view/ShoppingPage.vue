<template>
    Shopping
    <div class="shoppingcontainer">
            <ShoppingCom :title="`방금 사자들이 구매한 아이템`" />
            <ShoppingCom :title="`방금 사자들이 찜한 아이템`" />
            <ShoppingCom :title="`user님과 비슷한 소비를 한 사자들의 구매 아이템`" />
            <ShoppingCom :title="`--대 -성이 가장 많이 찜한 아이템`" />

    </div>
</template>

<script setup lang="ts">
import ShoppingCom from '@/ui-componenet/ShoppingCom.vue';



</script>

<style scoped>

.shoppingcontainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

</style>