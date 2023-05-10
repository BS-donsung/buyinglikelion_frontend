<template>
	<div class="item-container">
        <router-link :to="toLink" class="img-a">
            <img class="item-image" :src="product.image" />
        </router-link>
        <router-link :to="toLink" class="text-a flex-container column-direct item-component-text-info-area">
            <h3 class="item-text">{{ product.product }}</h3>
            <div class="price-text margin-top-auto">
                <span>최저가 </span><span id="pricebold">{{ product.price.toLocaleString() }}</span><span>원</span>
            </div>
        </router-link>
	</div>
</template>
<script setup lang="ts">

import {computed, defineProps, ref} from 'vue';
import {ProductDTO, ProductWithURLDTO, RegisteredProductDTO} from "@/dto/RegisteredProductDTO";
export interface ItemComponentProps {
    product : ProductWithURLDTO,
}

const props = defineProps<ItemComponentProps>();

const toLink = computed(() => {
    return `/search/product?url=${props.product.url}`
})

</script>

<style scoped lang="scss">

.item-container {
    display: flex;
    min-width: 350px;
    border-top: 1px solid gainsboro;
}

.img-a {
    padding: 0;
    margin: 0;
}

.item-image {
    height: 160px;
    width: 160px;
}


.text-a {
    display: flex;
    width: 100%;
    flex-direction: column;
    // align-items: flex-end;
    padding-top: 1.5rem;
    margin-right: 2rem;
    margin-left: 1.5rem;
}

.item-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    align-items: center;
    margin-bottom: 0.5rem;
    // margin-left: 1rem;
}


#pricebold {
    font-weight: bold;
}

.item-component-text-info-area {
    align-items: end;
    padding: 3rem 0;
}

</style>