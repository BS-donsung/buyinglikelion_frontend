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
				<div class="product-detail-image-container">
					<img :src="productService.data.image ?? 'default.url'">
				</div>
				<div class="product-detail-view-header">
					<h1 class="product-name">{{ productService.data.product }}</h1>
					<h2>{{productService.data.price}}</h2>
					<div class="flex-container justify-content-end">
						<MainColorButton
								v-if="isRegisteredWishList"
								value="가격 추적하기"
								:active="false"/>
						<MainColorButton
								v-else
								value="가격 해제하기"
								:active="true"/>
						<MainColorButton value="최저가 사러가기" :outlink="true" :to="props.url"/>
					</div>
				</div>
			</div>
			<div v-if="!lowpriceService.isEmpty && lowpriceService.isSuccess">
				<PriceListTable :data="mallAndPriceList" />
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

import {computed, ComputedRef, onMounted, onUpdated, ref, watch} from "vue";
import {GetQueryMultipleDataService, GetSingularDataService} from "@/service/AsyncGetQueryService";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {
    ENDPOINT_OF_SEARCHING_PRICE_INFO,
    ENDPOINT_OF_SEARCHING_PRODUCT_INFO
} from "@/requestinfo/CrawlingRequestInfo";
import {
    MallAndPrice,
    ProductDTO,
    MallInfoAndPrice,
} from "@/dto/RegisteredProductDTO";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import ComparePriceByMall from "@/components/chart/ComparePriceByMallChart.vue";
import PriceListTable from "@/components/table/PriceListTable.vue"
import {useWishListStore} from "@/store/WishListStore";

const mockURL = "http://item.gmarket.co.kr/DetailView/Item.asp?goodscode=1848434433&GoodsSale=Y&jaehuid=200001169&NaPm=ct%3Dlh8tuzqo%7Cci%3D62d9ba23c3a6a2e706c024386cda5ccdd9fe2632%7Ctr%3Dslct%7Csn%3D24%7Chk%3Dfb5fa1eaf377f54c993805478e142b4648cff40b"

interface ProductDetailPageInterface {
    url : string
}
const props = defineProps<ProductDetailPageInterface>();


const productService = ref(new GetSingularDataService<ProductDTO>() )
const lowpriceService = ref(new GetQueryMultipleDataService<MallAndPrice>())


const mallAndPriceList : ComputedRef<MallInfoAndPrice[]> = computed(() => {
    return lowpriceService.value.data
        .filter( data => SupportedShoppingMall.of(data.mall).isPresent )
        .map( data => ({mall : SupportedShoppingMall.of(data.mall).get(), price : data.price, url : mockURL}) )
})

const queryRequest = async () => {
    const productDetailEndPoint = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("url", props.url)
    await productService.value.getQuery(productDetailEndPoint)
    const lowpriceEndPoint = ENDPOINT_OF_SEARCHING_PRICE_INFO.appendQuery("url", props.url)
    await lowpriceService.value.getQuery(lowpriceEndPoint)
}

onMounted(queryRequest)
watch(
    () => props.url,
    queryRequest
)

const wishListService = useWishListStore().wishService

const isRegisteredWishList = computed( () => {
    return wishListService.isRegisteredByName(productService.value.data?.product ?? "")
})


</script>


<style scoped lang="scss">
.product-detail-image-container {
	& > img {
		width: 100%;
	}
}
</style>