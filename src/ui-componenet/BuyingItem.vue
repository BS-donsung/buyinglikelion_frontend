<template>
    <div class="item-container">
        <div class="item-img"><img :src="`https://s.pstatic.net/shopping.phinf/20230428_25/435a3623-6745-42ad-8013-715ae7052101.jpg?type=f214_292`" alt="buyingitemimg"></div>
        <div class="text-container">
            <div class="item-name">2023/05/08</div>
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
}

.item-img {
    width: 10rem;
    height: 10rem;
    margin: 8px 28px;
}

img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
}

.text-container {
    align-items: flex-start;
    justify-content: start;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.item-name {
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
}

.item-price {
    font-size: 16px;
    white-space: nowrap;
    align-self: end;
}

</style>