<template>
	<JoinBanner v-if="!authService.isAuthenticated"/>
	<SearchContainer />
	<WishListPage />
</template>

<script setup lang="ts">
import WishListPage from "@/view/wishlist/WishListPage.vue";
import SearchContainer from "@/container/SearchContainer.vue";
import JoinBanner from "@/ui-componenet/banner/JoinBanner.vue";
import {useAuthStore} from "@/store/AuthStore";
import {ref} from "vue";

const authService = ref(useAuthStore().authService);

</script>