<link rel="stylesheet" href="../style/color.scss">
<template>
	<div class="flex-container item-container container-center-horizontal">
		<router-link :to="`/wishlist/${product.id}`">
			<img class="item-image" :src="product.image" />
		</router-link>
		<div class="item-info">
			<router-link :to="`/wishlist/${product.id}`">
				<div class="wish-date">{{ product.choice_date }} </div>
				<div class="wish-item">{{ product.name }}</div>
				<div class="wish-price">
					<span>최저가 </span><span>{{ product.price.toLocaleString() }}</span><span>원</span>
				</div>
			</router-link>
			<div class="price-graph-btn" @click="togglePricegraph">
				<img class="pricegapic" src="@/asset/componenticon/가격추이ic.svg" alt="pricegapic" />
				<div class="pricetrend">&nbsp;가격 추이 보기&nbsp;</div>
				<img class="spreadic" src="@/asset/componenticon/spreadic.svg" alt="spreadic" />
			</div>
		</div>
		<div class="right-controller">
			<DefaultButton value="삭제" :on-click="handleRemoveItem" />
		</div>
	</div>
    <div v-if="pricegraphVisible" class="flex-container item-container price-graph">
        <img src="/assets/mock-chart.svg" alt="pricegraph">
    </div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue';
import { WishItem } from "@/dto/RegisteredProductDTO";
import DefaultButton from "@/ui-componenet/button/DefaultButton.vue";

export interface ItemViewProps {
    product : WishItem
    wish_price?: number,
    onRemove? : ( index : number ) => void
}

const props = withDefaults(defineProps<ItemViewProps>(), {
    wish_price : 10000
});


function handleRemoveItem() {
	props.onRemove?.(props.product.id)
}

const pricegraphVisible = ref(false);

const togglePricegraph = () => {
    pricegraphVisible.value = !pricegraphVisible.value;
}

</script>

<style scoped lang="scss">


.wishitem-container {
    display: flex;
    min-width: 350px;
    border-top: 1px solid gainsboro;
	
}

.item-image {
    height: 160px;
    width: 160px;
}


.item-info {
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    margin-right: 2rem;
    margin-left: 1rem;
}

.wishitem-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    align-items: center;
}



.price-graph-btn {
    display: flex;
    margin-top: auto;
    margin-bottom: 0.5rem;
}
.price-graph-btn:hover {
    cursor: pointer
    
}

.graphbutton div {
    font-size: 1.2rem;
    color: #575757;

}

.right-controller {
    margin-left: auto;
    display: flex;
    justify-content: center;
}


</style>