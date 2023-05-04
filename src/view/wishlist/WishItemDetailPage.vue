<template>
	<div>
		<div class="product-detail-view flex-container column-direct">
			<h1 class="product-name">
				{{ currentData[wishlistId].product }}
			</h1>
			<div>
				<span> 찜 등록 일자 : 2023 04 11 </span>
			</div>
			<div class="flex-container align-self-end">
				<MainColorButton value="찜" />
				<MainColorButton value="최저가 사러가기" />
			</div>
		</div>
		<div class="grid-container-half">
			<div class="product-detail-image-container">
				<img :src="currentData[wishlistId].image" />
			</div>
			<div
					class="relative-container-center-x"
					v-if="lowpriceService.isPending">
				<PenddingComponent guide-message="최저가를 찾는 중입니다." />
			</div>
			<div
					v-else
					class="price-section relative-container-center-x">
				<PriceListTable :data="mallAndPriceList" />
			</div>
		</div>
		<div
				v-if="!priceHistoryService.isEmpty && priceHistoryService.isSuccess"
				class="price-info">
			<PriceHistoryChart :data="priceHistory" />
		</div>
		<RecommendTab />
	</div>
</template>

<script setup lang="ts">

import {computed, ComputedRef, onMounted, ref} from "vue";
import RecommendTab from "@/ui-componenet/RecommendTab.vue";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import PriceListTable from "@/components/table/PriceListTable.vue"
import { useRoute } from "vue-router";
import {useWishListStore} from "@/store/WishListStore";
import {ENDPOINT_OF_SEARCHING_PRICE_INFO} from "@/requestinfo/CrawlingRequestInfo";
import {GetQueryMultipleDataService} from "@/service/OnceAsyncGetQueryService";
import {MallAndPrice, MallInfoAndPrice, PriceHistory} from "@/dto/RegisteredProductDTO";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import PenddingComponent from "@/ui-componenet/PenddingComponent.vue";
import {ENDPOINT_OF_PRICE_HISTORY} from "@/requestinfo/WishListRequestInfo";
import PriceHistoryChart from "@/components/chart/PriceHistoryChart.vue";


const route = useRoute()
const wishListService = ref(useWishListStore().wishService);
const wishlistId = computed(() => route.params.id as number)
const currentData = computed(() => wishListService.value.getDataList())


const lowpriceEndPoint = ENDPOINT_OF_SEARCHING_PRICE_INFO;
const lowpriceService = ref(new GetQueryMultipleDataService<MallAndPrice>(lowpriceEndPoint))

const mallAndPriceList : ComputedRef<MallInfoAndPrice[]> = computed(() => {
    return lowpriceService.value.data
        .filter( data => SupportedShoppingMall.of(data.mall).isPresent )
        .map( data => ({mall : SupportedShoppingMall.of(data.mall).get(), price : data.price}) )
})



const priceHistoryService = ref(new GetQueryMultipleDataService<PriceHistory>(ENDPOINT_OF_PRICE_HISTORY))

const priceHistory = computed( () => {
    return priceHistoryService.value.data.sort( ( rhs, lhr ) => {
        return new Date(rhs.date) - new Date(lhr.date)
    })
})

onMounted(async () => {
    await lowpriceService.value.getQuery()
    await priceHistoryService.value.getQuery()
})

</script>

<style scoped>
.product-detail-image-container {

	& > img {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
}


</style>