<template>
	<div>
		<div
				v-if="productService.isInit || productService.isPending"
				class="pending-container" >
			잠시만 기다려주세요
		</div>
		<div
				v-else-if="productService.isFailure || productService.isEmpty"
				class="failure-container" >
			해당 url을 찾지 못했습니다.
		</div>
		<div
				v-else
				class="product-detail-container">
			<div class="product-detail-view-main grid-container-half">
				<div>
					<img :src="productService.data.image ?? 'default.url'">
				</div>
				<div class="product-detail-view-header">
					<h1 class="product-name">{{ productService.data.product }}</h1>
					<h2>{{productService.data.price}}</h2>
					<div class="flex-container">
						<MainColorButton value="가격 추적하기" />
						<MainColorButton value="최저가 사러가기" :outlink="true" :to="props.url"/>
					</div>
					<div v-if="!lowpriceService.isEmpty && lowpriceService.isSuccess">
						<PriceTable :data="mallAndPriceList" />
					</div>
				</div>

			</div>
			<div v-if="!lowpriceService.isEmpty && lowpriceService.isSuccess">
				<ComparePriceByMall :data="mallAndPriceList" />
			</div>
			<div>
				// Related
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import {computed, ComputedRef, onMounted, onUpdated, ref} from "vue";
import {GetQueryMultipleDataService, GetQuerySingularDataService} from "@/service/OnceAsyncGetQueryService";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {
    ENDPOINT_OF_SEARCHING_PRICE_INFO,
    ENDPOINT_OF_SEARCHING_PRODUCT_INFO
} from "@/requestinfo/CrawlingRequestInfo";
import {MallEndPrice, ProductDTO, MallInfoAndPrice} from "@/dto/RegisteredProductDTO";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import ComparePriceByMall from "@/components/chart/ComparePriceByMall.vue";
import PriceTable from "@/ui-componenet/PriceTable.vue";

interface ProductDetailPageInterface {
    url : string
}
const props = defineProps<ProductDetailPageInterface>();

const productDetailEndPoint = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("url", props.url)
const productService = ref(new GetQuerySingularDataService<ProductDTO>(productDetailEndPoint) )

const lowpriceEndPoint = ENDPOINT_OF_SEARCHING_PRICE_INFO.appendQuery("url", props.url)
const lowpriceService = ref(new GetQueryMultipleDataService<MallEndPrice>(lowpriceEndPoint))

const mallAndPriceList : ComputedRef<MallInfoAndPrice[]> = computed(() => {
    return lowpriceService.value.data
	            .filter( data => SupportedShoppingMall.of(data.mall).isPresent )
	            .map( data => ({mall : SupportedShoppingMall.of(data.mall).get(), price : data.price}) )
})

onMounted(async () => {
    await productService.value.getQuery()
	await lowpriceService.value.getQuery()
})



</script>
