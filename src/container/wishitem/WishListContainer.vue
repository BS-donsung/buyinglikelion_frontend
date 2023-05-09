<template>
	<div>
		<ButtonTab
				:title="`${authService.data.username}의 WishList`"
				:list="sortButtonList"
				:not-change-position="true"
				:on-change="handleSorting"
		/>
		<h3 class="button-tab-extend">
			등록된 WishList : <span>{{wishlist.length}}</span>
		</h3>
		<WishItemComponent
				v-for="(item, index) in wishlist"
				:key="index"
				:product="item"
				:wish_price="50000"
				:on-remove="handleRemove"
		/>
	</div>
</template>

<script setup lang="ts">
import WishItemComponent from "@/ui-componenet/WishItemComponent.vue";
import ButtonTab, {ButtonInTabInterface} from "@/components/tab/ButtonTab.vue";
import {computed, ComputedRef, reactive, ref} from "vue";
import {WishItem, WishItemDTO} from "@/dto/RegisteredProductDTO";
import {useWishListStore} from "@/store/WishListStore";
import {SortingAlgorithm, SortingButtonInterfaceImpl} from "@/ui-interface/SortingButtonInterface";
import {useAuthStore} from "@/store/AuthStore";


interface WishListContainerState {
    sortingAlgorithm : SortingAlgorithm<WishItem> | undefined
}
const state = reactive<WishListContainerState>({
	sortingAlgorithm : undefined
})


const sortButtonList : SortingButtonInterfaceImpl<WishItem>[] = [
    SortingButtonInterfaceImpl.of<WishItem>("최근 등록된", "recent", (lhs, rhs) => rhs.choice_date.toComparable() - lhs.choice_date.toComparable()),
    SortingButtonInterfaceImpl.of<WishItem>("오래 등록된", "distant", (lhs, rhs) => lhs.choice_date.toComparable() - rhs.choice_date.toComparable()),
    SortingButtonInterfaceImpl.of<WishItem>("낮은 가격순", "low_prince", (lhs, rhs) => lhs.price - rhs.price),
    SortingButtonInterfaceImpl.of<WishItem>("높은 가격순", "high_price", (lhs, rhs) => rhs.price - lhs.price),
]

const authService = ref(useAuthStore().authService)

const wishListService = useWishListStore().wishService
const wishlist : ComputedRef<WishItem[]>= computed( () => {
    return wishListService.data.sort( state.sortingAlgorithm )
})

function handleSorting( sortValue : string) {
    state.sortingAlgorithm = sortButtonList.find( algorithmContainer => algorithmContainer.value == sortValue )?.sort ?? undefined
}

function handleRemove( index : number ) {
    wishListService.removeItem(index);
}

</script>
