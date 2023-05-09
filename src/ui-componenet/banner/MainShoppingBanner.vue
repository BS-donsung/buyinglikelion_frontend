<template>

	<ShoppingCom :title="`방금 사자들이 구매 등록한 아이템`" :items="recentPurchasedItems"/>
	<ShoppingCom :title="`방금 사자들이 찜한 아이템`" :items="recentWishList"/>
	<ShoppingCom
			v-if="service.isAuthenticated"
			:title="`user님과 비슷한 소비를 한 사자들의 구매 아이템`"
			:items="recentWishList"
	/>
	<ShoppingCom
			:title="`${determinatedAgeGroup} ${determinatedGenderGroup}성이 가장 많이 찜한 아이템`"
			:items="shuffle(recentPurchasedItems)"
	/>
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
import ShoppingCom from "@/ui-componenet/ShoppingCom.vue";
import {computed, ref} from "vue";
import {dummyAccountList, dummyWishList} from "@/dummy/DummyWishList";
import {shuffle} from "@/util/ArrayUtil";
import {useAuthStore} from "@/store/AuthStore";
import { determineAgeGroup } from "@/util/AgeUtil";

const recentWishList = shuffle(dummyWishList).map( data => data.toDTO() );
const recentPurchasedItems = shuffle(dummyAccountList);

const service = ref(useAuthStore().authService)

const determinatedAgeGroup = computed(() => {
    if(!service.value.isAuthenticated) {
        return "20대";
    } else {
        // return determineAgeGroup( service.value.data.birth );
	    return "30대";
    }
})

const determinatedGenderGroup = computed(() => {
    if(!service.value.isAuthenticated) {
        return "여";
    } else {
        return "남";
    }
})

</script>