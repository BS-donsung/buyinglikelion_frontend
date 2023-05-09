<template>
	<div class="main-search-banner">
		<div class="flex-container column-direct ">
			<h1 class="main-search-banner-main-title">
				편리함을 경험하세요!
			</h1>
			<div class="main-search-banner-sub-title">
				모바일과 데스크톱 모두 지원하는 장바구니 서비스로 언제 어디서나 쇼핑을 즐기세요.
			</div>
			<div class="main-search-banner-sub-title">
				최저가 검색을
				<span class="highlight-text" v-if="!service.isAuthenticated">
					로그인 없이
				</span>
				지금 바로 경험해보세요
			</div>
			<div class="main-search-banner-search-container">
				<SearchContainer />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import SearchContainer from "@/container/SearchContainer.vue";
import {useAuthStore} from "@/store/AuthStore";
import {ref} from "vue";

const service = ref(useAuthStore().authService)

</script>

<style scoped lang="scss">
@use "@style/color" as color;

.main-search-banner {
    height: 45vh;
    padding: 3rem;

	& > div {
        height: 100%;
	}
}
.main-search-banner-main-title {
    font-size: 5rem;
	margin: 0 0 1.5rem;
}

.main-search-banner-sub-title {
    font-size: 2rem;
	margin: 0.5rem 0;
}

.main-search-banner-search-container {
	margin-top: auto;
    width: 70%;
    align-self: end;
}
.highlight-text {
	display: inline-block;
	color : color.$color-point;
	font-weight: 700;
	transform: scale(1.2);
	margin: 0 0.8rem;
}
</style>