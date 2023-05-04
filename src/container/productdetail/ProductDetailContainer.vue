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
					<div v-if="!lowpriceService.isEmpty && lowpriceService.isSuccess">
						<PriceListTable :data="mallAndPriceList" />
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
import {MallAndPrice, ProductDTO, MallInfoAndPrice} from "@/dto/RegisteredProductDTO";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import ComparePriceByMall from "@/components/chart/ComparePriceByMallChart.vue";
import PriceListTable from "@/components/table/PriceListTable.vue"
import {useWishListStore} from "@/store/WishListStore";

interface ProductDetailPageInterface {
    url : string
}
const props = defineProps<ProductDetailPageInterface>();

const productDetailEndPoint = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("url", props.url)
const productService = ref(new GetQuerySingularDataService<ProductDTO>(productDetailEndPoint) )

const lowpriceEndPoint = ENDPOINT_OF_SEARCHING_PRICE_INFO.appendQuery("url", props.url)
const lowpriceService = ref(new GetQueryMultipleDataService<MallAndPrice>(lowpriceEndPoint))

const mallAndPriceList : ComputedRef<MallInfoAndPrice[]> = computed(() => {
    return lowpriceService.value.data
	            .filter( data => SupportedShoppingMall.of(data.mall).isPresent )
	            .map( data => ({mall : SupportedShoppingMall.of(data.mall).get(), price : data.price}) )
})

onMounted(async () => {
    await productService.value.getQuery()
	await lowpriceService.value.getQuery()
})

const wishListService = ref(useWishListStore().wishService);

const isRegisteredWishList = computed( () => {
    return wishListService.value.isRegistered(productService.value.data?.product ?? "")
})






// const snackBarService = ref(useSnackbarService().service);
//
// const registeredData = computed(() => {
//     const currentProductName = productService.value.data.product;
//     return wishListService.value.getDataList().find( data => data.product == currentProductName )
// })
//
// async function registerItem() {
//     const result = await wishListService.value.registerItem( { product : productService.value.data.product } )
// 	if(result.isPresent) {
//         // error 처리
//         snackBarService.value.activate( { message : result.get().message } )
// 	} else {
//         // 등록 완료 처리
//         snackBarService.value.activate( { message : "등록이 완료되었습니다." } )
// 	}
// }
//
// async function removeItem() {
//     const result = await wishListService.value.removeItem( registeredData.value?.id!! )
//     if(result.isPresent) {
//         // error 처리
//         snackBarService.value.activate( { message : result.get().message } )
//     } else {
//         // 등록 완료 처리
//         snackBarService.value.activate( { message : "등록이 완료되었습니다." } )
//     }
// }
//

</script>
