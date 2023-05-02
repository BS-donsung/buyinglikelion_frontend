<template>
    <div class="item-container">
        <div class="item-img"><img :src="`https://s.pstatic.net/shopping.phinf/20230428_25/435a3623-6745-42ad-8013-715ae7052101.jpg?type=f214_292`" alt="buyingitemimg"></div>
        <div class="text-container">
            <div class="item-name">item-name</div>
            <div class="item-price">123455 원</div>
        </div>

    </div>
</template>

<script lang="ts">
export default {
  name: 'BuyingItem',
}
</script>


<script setup lang="ts">

</script>

<style scoped>

.item-container {
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
}

.item-img {
    width: 80px;
    height: 80px;
    margin: 8px 28px;
}

img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
}

.text-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item-name {
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
}

.item-price {
    font-size: 16px;
    white-space: nowrap;
}

</style>