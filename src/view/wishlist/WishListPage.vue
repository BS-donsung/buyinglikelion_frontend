<template>
	<div v-if="isEmptyOfWishList">
		<EmptyWishList />
	</div>
	<section v-else>
		<h1 class="wishtitle" >
			{{ currentUsername }}의 Wish List
		</h1>
		<WishListContainer />
	</section>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/AuthStore";
import {computed, ref} from "vue";
import {useWishListStore} from "@/store/WishListStore";
import {ButtonInTabInterface} from "@/components/tab/ButtonTab.vue";
import WishListContainer from "@/container/wishitem/WishListContainer.vue";
import EmptyWishList from "@/ui-componenet/banner/EmptyWishListBanner.vue";


const authService = useAuthStore().authService;
const wishListService = useWishListStore().wishService;

const isEmptyOfWishList = computed(() => {
    return wishListService.length == 0;
})
const currentUsername = computed(() => {
    return authService.data.username
})

</script>