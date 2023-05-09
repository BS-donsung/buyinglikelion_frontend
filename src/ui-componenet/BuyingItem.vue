<template>
    <div class="item-container">
        <div class="item-img"><img :src="props.item.image" alt="buyingitemimg"></div>
        <div class="text-container">
            <div class="item-name">{{props.item.date}}</div>
            <div class="item-name">{{props.item.product}}</div>
            <div class="item-price">{{props.item.price.toLocaleString()}}</div>
        </div>

    </div>
</template>

<script setup lang="ts">

import {AccountItem} from "@/dto/AccountItemDTO";

interface BuyingItemProps {
    item : AccountItem
}

const props = defineProps<BuyingItemProps>();


</script>

<style scoped lang="scss">
@use "@style/color" as color;

.item-container {
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 1rem;

    &:hover {
        background-color: color.$gray-100;
    }
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
    padding: 1rem;
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
    margin-top: auto;
}

</style>