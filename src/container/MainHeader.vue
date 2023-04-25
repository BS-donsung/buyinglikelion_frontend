<template>
	<header class="position-fixed">
		<div class="flex-container main-header">
			<router-link to="/">
				<img src="@asset/logo.svg" class="icon"/>
			</router-link>
			<div class="margin-left-auto">
				<ul class="flex-container">
					<li>
						<img src="@asset/icon/noti.svg" class="icon"/>
					</li>
					<li>
						<img src="@asset/icon/search.svg" class="icon"/>
					</li>
					<li>

						<div style="width: 48px; height: 48px; border-radius: 50%; background-color: black;"></div>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/AuthStore";
import {computed} from "vue";

const authStore = useAuthStore();
const isAuthenticated = computed( () => (authStore.authService.isAuthenticated) );
console.log(isAuthenticated)

</script>

<style scoped lang="scss">
	@use "@style/color" as color;
	@use "@style/zindex" as zindex;

	header {
	    z-index: zindex.$z-index-middle;
		& > .main-header {
			background-color: color.$color-main;
		}
	}

	.main-header-user-info {
		border: 1px solid black;
		border-radius: 50%;
		width: 4.8rem;
		height: 4.8rem;
	}

	img.icon, .main-header-user-info {
	    height: 3rem;
	    width: 3rem;
	    max-height: 3rem;
	}
</style>

<!--
	어느정도 스크롤하면 additonal search area 숨기기
-->