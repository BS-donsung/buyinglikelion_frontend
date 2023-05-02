<template>
	<tr class="flex-container">
		<td>
			<img :src="`/assets/mallicon/${mall}`">
		</td>
		<td>{{ props.price }}</td>
	</tr>
</template>

<script setup lang="ts">

import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";

interface MallAndPriceProps {
    mall : SupportedShoppingMall;
	price: number;
}

const props = defineProps<MallAndPriceProps>();

</script>

<style scoped lang="scss">
img {
	height: 3rem;
	max-height: 3rem;
}

</style>