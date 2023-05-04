<template>
	<h1 class="wishtitle">
		{{ authService.getData().username }}의 Wish List
	</h1>
	<ul v-if="store.size !== 0"
			class="flex-container align-controller" :style="WishListControllerStyle">
		<li>
			<MainColorButton value="최근 등록 된" :style="WishListControllerButtonStyle" />
		</li>
		<li>
			<MainColorButton value="가격 변동이 큰" :style="WishListControllerButtonStyle" />
		</li>
		<li>
			<MainColorButton value="우선 순위" :style="WishListControllerButtonStyle" />
		</li>
	</ul>
	<div v-if="isEmptyOfWishList">
		<div class="havenowish-container">
			<div class="havenowishscreen">
				<img class="sajaface" src="@/asset/componenticon/sajaface.png" alt="sajaface" />
				<div class="nowishtext">
					<span class="span-jjim">찜한 상품</span><span class="notosans-bold-black-20px">이 없습니다.</span>
				</div>
				<p class="nowishinnertext notosans-normal-black-20px">사자님을 위한 For you 메뉴를 확인하여 관심상품을 추가해보세요!</p>
			</div>
		</div>
	</div>
	<section v-else>
		<WishItemComponent
				v-for="(item, index) in wishListService.getDataList()"
				:key="index"
				:product="item"
				:wish_price="50000"/>
	</section>
</template>

<script setup lang="ts">

import WishItemComponent from '@/ui-componenet/WishItemComponent.vue';
import {useAuthStore} from "@/store/AuthStore";
import {DistinctSet} from "@/util/DistinctSet";
import {WishItemDTO} from "@/dto/RegisteredProductDTO";
import {computed, ref} from "vue";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {
    WishListControllerButtonStyle,
    WishListControllerStyle
} from "@style/css-properties/WishListControllerButtonStyle";
import {useWishListStore} from "@/store/WishListStore";



const authStore = useAuthStore();
const authService = ref(authStore.authService)

const store = ref(new DistinctSet(( wishItem : WishItemDTO ) => wishItem.id ))

const wishListService = ref(useWishListStore().wishService)

const isEmptyOfWishList = computed(() => {
    return wishListService.value.length == 0;
})
console.log("isEmptyOfWishList", isEmptyOfWishList);

</script>

<style scoped lang="scss">
@use "@style/color" as color;

.wishtitle {
	margin-bottom: 3rem;
}

.select-panel {
    margin: 1rem 0;
    & > *:last-child {
        margin-left: auto;
    }
}

.align-controller {
	justify-content: end;

	& > * {
		margin-left: 1rem;
	}
}


.wishtitle {
    letter-spacing: 0;
    line-height: normal;
    min-height: 33px;
    font-size: 24px;
}

.havenowish-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    width: 100%;

    & > * {
        flex-shrink: 0;
        pointer-events: auto;
    }
}

.havenowish {
    align-items: center;
    background-color: white;
    border: 1px none;
    display: flex;
    flex-direction: column;
    height: 440px;
    padding: 79px 144px;
    width: 832px;
}

.sajaface {
    height: 160px;
    margin-right: 20.0px;
    object-fit: cover;
    width: 160px;
}

.nowishtext {
    color: transparent;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-right: 19.0px;
    margin-top: 29px;
    min-height: 27px;
    min-width: 181px;
}

.span-jjim {
    color: color.$color-point
}

.nowishinnertext {
    align-self: flex-end;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 13px;
    min-height: 27px;
    min-width: 543px;
}
</style>