<template>
	<div>
		<WishItemDetailHeader
				:current-product="currentProduct"
				:is-active-button="isActiveButton"
				:url="mockURL"
				:on-click="handleTogglePriceTracking"
			/>
		<div class="grid-container-half">
			<div class="product-detail-image-container">
				<img :src="currentProduct.image" />
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
import PriceListTable from "@/components/table/PriceListTable.vue"
import {useWishListStore} from "@/store/WishListStore";
import {ENDPOINT_OF_SEARCHING_PRICE_INFO} from "@/requestinfo/CrawlingRequestInfo";
import {GetQueryMultipleDataService} from "@/service/OnceAsyncGetQueryService";
import {MallAndPrice, MallInfoAndPrice, PriceHistory} from "@/dto/RegisteredProductDTO";
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";
import PenddingComponent from "@/ui-componenet/PenddingComponent.vue";
import {ENDPOINT_OF_PRICE_HISTORY} from "@/requestinfo/WishListRequestInfo";
import PriceHistoryChart from "@/components/chart/PriceHistoryChart.vue";
import WishItemDetailHeader from "@/components/WishItemDetailHeader.vue";
import {useSnackbarService} from "@/store/ui/UISnackbarService";

interface WishItemDetailContainerProps {
    id? : number
}
const props = defineProps<WishItemDetailContainerProps>()
const snackBarService = useSnackbarService().service

const wishListService = useWishListStore().wishService;
const currentProduct = computed(() => wishListService.data[props.id])

const lowpriceEndPoint = ENDPOINT_OF_SEARCHING_PRICE_INFO;
const lowpriceService = ref(new GetQueryMultipleDataService<MallAndPrice>(lowpriceEndPoint))
const mockURL = "http://item.gmarket.co.kr/DetailView/Item.asp?goodscode=1848434433&GoodsSale=Y&jaehuid=200001169&NaPm=ct%3Dlh8tuzqo%7Cci%3D62d9ba23c3a6a2e706c024386cda5ccdd9fe2632%7Ctr%3Dslct%7Csn%3D24%7Chk%3Dfb5fa1eaf377f54c993805478e142b4648cff40b"


const mallAndPriceList : ComputedRef<MallInfoAndPrice[]> = computed(() => {
    return lowpriceService.value.data
        .filter( data => SupportedShoppingMall.of(data.mall).isPresent )
        .map( data => ({mall : SupportedShoppingMall.of(data.mall).get(), price : data.price, url : mockURL}) )
})

const priceHistoryService = ref(new GetQueryMultipleDataService<PriceHistory>(ENDPOINT_OF_PRICE_HISTORY))

const priceHistory = computed( () => {
    return priceHistoryService.value.data.sort( ( rhs, lhr ) => {
        return new Date(rhs.date) - new Date(lhr.date)
    })
})

const isActiveButton : ComputedRef<boolean> = computed(() => {
    return wishListService.isRegisteredById(props.id);
})

onMounted(async () => {
    await lowpriceService.value.getQuery()
    await priceHistoryService.value.getQuery()
})

async function handleTogglePriceTracking( tracking : boolean ) {
	if(tracking) {
        const result = await wishListService.removeItem(props.id)
        snackBarService.activate( { message : "가격 추적이 해제되었습니다." })
    } else {
        const result = await wishListService.registerItem({ product : currentProduct.value.name } )
        snackBarService.activate( { message : "가격 추적이 시작되었습니다." })
	}
}

</script>


<style scoped lang="scss">
.product-detail-image-container {

    & > img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
}

</style>