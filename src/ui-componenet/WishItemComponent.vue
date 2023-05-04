<template>
	<div class="wishitem-container">
		<router-link to="/wishlist/{{product.id}}">
			<img class="item-image" :src="product.image" />
		</router-link>
		<div class="item-info">
			<router-link to="/wishlist/{{product.id}}">
				<div class="wishdate-text">{{ "2023/04/25" }} </div>
				<div class="wishitem-name">{{ product.name }}</div>
				<div class="wish-price">
					<span>최저가 </span><span>{{ product.price }}</span><span>원</span>
				</div>
			</router-link>
			<div class="graphbutton" @click="togglePricegraph">
				<img class="pricegapic" src="@/asset/componenticon/가격추이ic.svg" alt="pricegapic" />
				<div class="pricetrend">&nbsp;가격 추이 보기&nbsp;</div>
				<img class="spreadic" src="@/asset/componenticon/spreadic.svg" alt="spreadic" />
			</div>
		</div>
		<div class="right-controller">
			<img class="deletebtn" src="@/asset/componenticon/item_close.svg" alt="deletebtn" @click="handleRemoveItem"/>
		</div>
	</div>
    <div v-if="pricegraphVisible" class="flex-container item-container price-graph">
        <img src="/assets/mock-chart.svg" alt="pricegraph">
    </div>
</template>

<script setup lang="ts">

import { defineProps, ref } from 'vue';
import {RegisteredProductDTO} from "@/dto/RegisteredProductDTO";

export interface ItemViewProps {
    index : number,
    product : RegisteredProductDTO
    wish_price?: number,
    onremove : ( index : number ) => void
}

const props = withDefaults(defineProps<ItemViewProps>(), {
    wish_price : 10000
});


function handleRemoveItem() {
    // console.log(props.index)
	props.onremove(props.product.id)
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

.img-a {
    padding: 0;
    margin: 0;
}

.item-image {
    height: 160px;
    width: 160px;
}


.item-info {
    display: flex;
    width: 100%;
    flex-direction: column;
    // align-items: flex-end;
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
    // margin-bottom: 0.5rem;
}



.graphbutton {
    display: flex;
    margin-top: auto;
    margin-bottom: 0.5rem;
}
.graphbutton:hover {
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