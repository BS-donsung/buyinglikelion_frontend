<template>
	<div class="product-detail-view">
		<img class="product-img"
		     :src="product?.image ?? '@asset/componenticon/lionlogo1.png'"
		     alt="imgbox" />
		<h3 class="product-name">{{ product.name }}</h3>
		<h2 class="product-price">
			<span class="price-number">{{ product.price }}</span><span class="won">원</span>
		</h2>
	</div>
</template>


<script setup lang="ts">

import { defineProps } from 'vue';
import { WishItemDTO } from "@/dto/RegisteredProductDTO";

interface ProductDetailProps {
    product : WishItemDTO
}
const props = defineProps<ProductDetailProps>();

</script>

<style scoped>

.product-detail-view {
    display: flex;
    flex-direction: column;
    min-height: 30rem;

	& > * {
		margin-bottom: 1rem;
	}
}

.product-img {
    height: 30rem;
    min-width: 4px;
    object-fit: contain;
    border-radius: 20px;
    background-color: gainsboro;
}

.product-name {

}
.product-price {
	align-self: end;
}
</style>