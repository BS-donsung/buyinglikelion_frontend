<template>
	<tr class="flex-container">
		<td>
			<img :src="`/assets/mallicon/${props.data.mall.image}`">
		</td>
		<td>{{ props.data.price }}</td>
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
img {
	height: 3rem;
	max-height: 3rem;
}

</style>