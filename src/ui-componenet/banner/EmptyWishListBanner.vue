<template>
	<div class="empty-wishlist-banner-container">
		<div class="empty-wishlist-banner">
			<img class="sajaface" src="@asset/logo.svg" alt="sajaface" />
			<div class="empty-wishlist-banner-main-message flex-container">
				<h2>관심 상품</h2><span>이 아직 없습니다.</span>
			</div>
			<p class="nowishinnertext notosans-normal-black-20px">관심 상품을 저장하고 가격 변화를 추적해보세요!</p>
		</div>
		<SampleChartBanner />
	</div>
</template>

<style scoped lang="scss">
@use "@style/color" as color;

.wishtitle {
    letter-spacing: 0;
    line-height: normal;
    min-height: 33px;
    font-size: 24px;
}

.empty-wishlist-banner-main-message {

	& > h2 {
		color: color.$color-point;
		margin-right: 0.5rem;
		transform: translateY(-3px);
	}
}

.empty-wishlist-banner-container {
	padding: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    pointer-events: none;
    width: 100%;
    background-color: rgba(239, 83, 80, 0.1);
    margin: 3rem 0;

    & > * {
        flex-shrink: 0;
        pointer-events: auto;
    }
}

.sajaface {
    height: 160px;
    margin-right: 20.0px;
    object-fit: cover;
    width: 160px;
}

</style>
<script setup lang="ts">
import SampleChartBanner from "@/ui-componenet/banner/SampleChartBanner.vue";
</script>