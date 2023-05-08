<template>
	<div class="product-detail-view flex-container column-direct">
		<h1 class="product-name">
			{{ currentProduct.name }}
		</h1>
		<div>
			<span> 찜 등록 일자 : 2023 04 11 </span>
		</div>
		<div
				class="flex-container align-self-end controller">
			<MainColorButton
					:value="props.isActiveButton ? `가격 추적 중` : `가격 추적 하기`"
					:active="props.isActiveButton"
					:on-click="handleSummit"
			/>
			<MainColorButton value="최저가 사러가기" :outlink="true" :to="props.url"/>
		</div>
	</div>
</template>

<script setup lang="ts">

import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {WishItem} from "@/dto/RegisteredProductDTO";

interface WishItemDetailHeaderProps {
    currentProduct : WishItem,
	url : string,
	isActiveButton : boolean
	onClick? : ( boolean ) => void;
}

const props = defineProps<WishItemDetailHeaderProps>()

function handleSummit() {
    props.onClick?.(props.isActiveButton);
}

</script>



<style scoped lang="scss">
.controller {
	gap: 1.5rem;
}
</style>