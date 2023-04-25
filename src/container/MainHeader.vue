<template>
	<header>
		<div class="flex-container main-header">
			<router-link to="/">
				<Logo size="5"/>
			</router-link>
			<div class="margin-left-auto">
				<ul class="flex-container">
					<li>
						<SearchIcon />
					</li>
					<li>
						<NotiIcon />
					</li>
					<li>
						<div class="main-header-user-info">

						</div>
					</li>
				</ul>
			</div>
		</div>
<!--		<div class="additional-header">-->
<!--			<input type="text" name="" id="">-->
<!--			<button>image</button>-->
<!--		</div>-->
	</header>
</template>

<script setup lang="ts">
import Logo from "@/asset/Logo.vue"
import NotiIcon from "@/asset/icon/noti.vue"
import SearchIcon from "@/asset/icon/search.vue"
// make store to use any way



// const redirectionToSearchComponent = ( queryString : string ) => {
//     this.$router.push({ path : "/search", query : { url : queryString } })
// }
</script>

<style scoped lang="scss">
	@use "@style/color.scss" as color;

	.main-header {
		background-color: color.$color-main;
	}

	.main-header-user-info {
		border: 1px solid black;
		border-radius: 50%;
		width: 4.8rem;
		height: 4.8rem;
	}
</style>

<!--
	어느정도 스크롤하면 additonal search area 숨기기
-->