<template>
	<div class="grid-container-right-400px">
		<div class="grid-left-side">
			<SearchContainer />
			<WishListPage />
		</div>
		<div class="grid-right-side">
			Recommendation<br />
			- 구매한 태그<br />
			- 관심 있는 태그<br />
			- 비슷한 사람이 구매한 태그<br />
		</div>
	</div>
</template>

<script setup lang="ts">
import SearchForm from "@/ui-componenet/SearchForm.vue";
import {useRouter} from "vue-router";
import WishItemDetailPage from "@/view/wishlist/WishItemDetailPage.vue";
import WishListPage from "@/view/wishlist/WishListPage.vue";
import SearchContainer from "@/container/SearchContainer.vue";

const router = useRouter();

</script>