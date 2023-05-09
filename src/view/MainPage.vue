<template>
	<JoinBanner v-if="!authService.isAuthenticated"/>
	<MainSearchBanner />
	<div
			v-if="!authData.isAuthentication || isEmptyOfWishList"
			class="empty-banner"
	>
		<EmptyWishList />
	</div>
	<section v-else>
		<WishListContainer />
	</section>
	<MainShoppingBanner />
</template>

<script setup lang="ts">
import JoinBanner from "@/ui-componenet/banner/JoinBanner.vue";
import {useAuthStore} from "@/store/AuthStore";
import {computed, ref} from "vue";
import MainSearchBanner from "@/ui-componenet/banner/MainSearchBanner.vue";
import MainShoppingBanner from "@/ui-componenet/banner/MainShoppingBanner.vue";
import WishListContainer from "@/container/wishitem/WishListContainer.vue";
import EmptyWishList from "@/ui-componenet/banner/EmptyWishListBanner.vue";
import {useWishListStore} from "@/store/WishListStore";

const authService = ref(useAuthStore().authService);
const wishListService = useWishListStore().wishService;

const isEmptyOfWishList = computed(() => {
    return wishListService.length == 0;
})
const authData = computed(() => {
    return authService.value.data
})

</script>