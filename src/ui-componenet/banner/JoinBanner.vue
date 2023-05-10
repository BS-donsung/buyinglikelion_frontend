<template>
	<div class="join-banner">
		<div class="join-banner-content-container grid-container-right-250px">
			<div class="flex-container column-direct guide-area">
				<div class="join-banner-text-logo-container">
					<img src="@asset/logo-text-single-line.svg">
					<h1 class="inline-block">
						는
					</h1>
				</div>
				<h1 class="inline-block">
					장바구니형 가격비교 쇼핑 서비스입니다.
				</h1>
				<h3>
					최저가 가격 변동 및 맞춤형 쇼핑정보를 제공해 즐거운 쇼핑 경험을 선사합니다.
				</h3>
				<div>
					<MainColorButton value="사자처럼 가입하기" to="/auth/register" :active="true"/>
				</div>
			</div>
			<div class="image-area">
				<img src="@asset/logo.svg" class="animated-image-swing" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
</script>


<style scoped lang="scss">
@use "@style/color" as color;

.join-banner {
	background-color: color.$color-main;
    padding: 2.5rem 3rem 3rem;

    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);

	border-bottom: 1px solid black;
}

.join-banner-text-logo-container {
	& > img {
		height: 5rem;
        transform: translateY(5px);
        margin-right: 5px;
	}
}

.join-banner-content-container {
	margin: 0 auto;
	max-width: 1200px;
}

.guide-area {
    justify-content: end;

	& > *:not(*:first-child) {
		margin-top: 1rem;
	}

	& > h3 {
		margin-top: 1.3rem;
	}

	& > *:last-child {
		margin-top: 2rem;
	}
}

</style>