<template>
	<div>
		<div class="product-detail-view">
			<h1 class="product-name">{{ state.product.name }}</h1>
			<div>
				<span> 찜 등록 일자 : 2023 04 11 </span>
			</div>
			<div class="flex-container">
				<MainColorButton value="찜" />
				<MainColorButton value="최저가 사러가기" />
			</div>
		</div>
		<div class="grid-container-half">
			<div>
				<img :src="state.product.image" />
			</div>
			<div class="price-section">
				<LowPriceTable />
			</div>
		</div>
		<div class="price-info">

		</div>
		<RecommendTab />
	</div>
</template>

<script setup lang="ts">

import {dummyWishList} from "@/dummy/DummyWishList";
import {reactive} from "vue";
import RecommendTab from "@/ui-componenet/RecommendTab.vue";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import LowPriceTable from "@/ui-componenet/PriceTable.vue";

const state = reactive({
	product : dummyWishList[1]
})
</script>

<style scoped>
.right-controller {
	padding: 3rem;

	& > * {
		margin-bottom: 2rem;

		&:last-child {
			margin-bottom: 0;
		}

	}
}
</style>