<template>
	<div>
		<h3 class="table-title">쇼핑몰 별 최저가</h3>
		<table>
			<thead>
			<tr>
				<th>쇼핑몰</th>
				<th>가격</th>
			</tr>
			</thead>

			<tbody>
				<MallAndPriceComponent v-for="(data, index) in props.data" :data="data" :key="index"/>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
export default {
    name: 'LowPriceTable',
}
</script>

<script setup lang="ts">

import {MallInfoAndPrice} from "@/dto/RegisteredProductDTO";
import MallAndPriceComponent from "@/components/table/MallAndPriceComponent.vue";

interface MallAndPriceComponentProps {
    data : MallInfoAndPrice[]
}

const props = defineProps<MallAndPriceComponentProps>();

</script>

<style scoped>
.table-title {
    margin-bottom: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: center;
}

thead tr {
    background-color: rgba(213, 193, 173, 0.3);
    border: 1px solid rgba(213, 193, 173, 1);
    font-size: 16px;
}

td {
    height: 2rem;
}

td img {
    height: inherit;
    margin-left: 1rem;
    margin-top: 0.5rem;
}

.item-img {
    text-align: left;
}

.item-price {
    text-align: center;
}

</style>