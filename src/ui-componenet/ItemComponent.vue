<template>
	<div class="flex-container item-container container-center-horizontal">
		<div class="right-controller">
			<input type="checkbox" id="checkbox" />
		</div>
		<img class="item-image" :src="product.image" />
		<div class="item-info">
			<div class="wish-date">{{ "2023/04/25" }} </div>
			<div class="wish-item">{{ product.name }}</div>
			<div class="wish-price">
				<span>{{ product.price }}</span><span>원</span>
			</div>
			<div class="flex-container inline m">
				<img class="pricegapic" src="@/asset/componenticon/가격추이ic.svg" alt="pricegapic" />
				<div class="pricetrend">가격 추이 보기</div>
				<img class="spreadic" src="@/asset/componenticon/spreadic.svg" alt="spreadic" />
			</div>
		</div>
		<div class="left-controller">
			<img class="deletebtn pointer" src="@/asset/componenticon/item_close.svg" alt="deletebtn" @click="handleRemoveItem"/>
		</div>
	</div>
</template>

<script lang="ts">
</script>

<script setup lang="ts">

import { defineProps } from 'vue';
import {ProductDTO} from "@/dto/ProductDTO";

export interface ItemViewProps {
    index : number,
    product : ProductDTO
    wish_price?: number,
    onremove : ( index : number ) => void
}
const props = withDefaults(defineProps<ItemViewProps>(), {
    wish_price : 10000
});

function handleRemoveItem() {
    // console.log(props.index)
	props.onremove(props.index)
}


</script>

<style scoped>

.item-container {
    justify-content: center;
	&  > * {
        flex-shrink: 0;
        pointer-events: auto;
    }
}

.item-image {
    height: 160px;
    margin-left: 24px;
    width: 160px;
}

.item-info {
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding: 1rem 0;

	& > *:last-child {
		margin-top: auto;
	}
}


.pricegapic {
    height: 12px;
    width: 20px;
}

.pricetrend {
    letter-spacing: 0;
    line-height: 11.2px;
    margin-bottom: 0.4px;
    margin-left: 11px;
    min-height: 11px;
    text-align: center;
    white-space: nowrap;
    width: 62px;
    font-size: 10px;
}

.spreadic {
    height: 8px;
    margin-left: 8px;
    /* margin-top: 1.6px; */
    width: 12px;
}

.left-controller {
	margin-left: auto;
}
</style>