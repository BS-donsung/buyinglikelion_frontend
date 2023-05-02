<template>
	<div class="grid-container-right-400px">
		<div class="grid-left-side">

			<div class="product-detail-view">
				<div class="product-detail-view-header">
					<h1 class="product-name">{{ state.product.name }}</h1>
					<div>
						<span> 찜 등록 일자 : 2023 04 11 </span>
					</div>
				</div>
				<div class="grid-container-half">
					<div>
						<img class="product-img"
						     :src="state.product?.image ?? '@asset/componenticon/lionlogo1.png'"
						     alt="imgbox" />
					</div>
					<div>
						<h3>쇼핑몰 별 최저가</h3>
						<table>
							<thead>
								<th>쇼핑몰</th>
								<th>가격</th>
							</thead>
							<tbody>
								<MallAndPriceComponent :mall="SupportedShoppingMall.GMARKET" price="10000"/>
								<MallAndPriceComponent :mall="SupportedShoppingMall.AUCTION" price="10000"/>
								<MallAndPriceComponent :mall="SupportedShoppingMall.COUPANG" price="10000"/>
								<MallAndPriceComponent :mall="SupportedShoppingMall.ELEVEN" price="10000"/>
								<MallAndPriceComponent :mall="SupportedShoppingMall.NAVER" price="10000"/>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<PriceHistorySection />
			<RecommendTab />
		</div>
		<div class="grid-right-side">
			<div class="right-controller flex-container column-direct">
				<MainColorButton value="찜" />
				<MainColorButton value="최저가 사러가기" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import {dummyWishList} from "@/dummy/DummyWishList";
import {reactive} from "vue";
import RecommendTab from "@/ui-componenet/RecommendTab.vue";
import PriceHistorySection from "@/components/PriceHistorySection.vue";
import MallAndPriceComponent from "@/components/MallAndPriceComponent.vue";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";

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