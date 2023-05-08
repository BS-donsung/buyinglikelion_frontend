<template>
	<tr class="mall-and-price-tr pointer">
		<td class="text-align-center">
			<img :src="`/assets/mallicon/${props.data.mall.image}`">
		</td>
		<td class="text-align-center">
			{{ props.data.price }}
		</td>
	</tr>
</template>

<script setup lang="ts">

import {MallInfoAndPrice} from "@/dto/RegisteredProductDTO";

interface MallAndPriceComponentProps {
    data : MallInfoAndPrice
}

const props = defineProps<MallAndPriceComponentProps>();

</script>

<style scoped lang="scss">
@use "@style/color" as color;
img {
	height: 3rem;
	max-height: 3rem;
}
tr.mall-and-price-tr {
	& > td {
		padding : 0.5rem 0;
	}

	&:hover {
		background-color: color.$gray-100;
	}
}

</style>