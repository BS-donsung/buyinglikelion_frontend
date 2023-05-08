<template>
	<div
			v-if="!authData.isAuthentication || isEmptyOfWishList"
			class="empty-banner"
	>
		<EmptyWishList />
	</div>
	<section v-else>
		<h1 class="wishtitle" >
			{{ authData.username }}의 Wish List
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


const authService = ref(useAuthStore().authService);
const wishListService = useWishListStore().wishService;

const isEmptyOfWishList = computed(() => {
    return wishListService.length == 0;
})
const authData = computed(() => {
    return authService.value.data
})

</script>

<style scoped lang="scss">
.empty-banner {
	margin: 4rem;
}
</style>