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

<script setup lang="ts">
import MallAndPriceComponent from "@/components/table/MallAndPriceComponent.vue";
import {MallInfoAndPrice} from "@/dto/RegisteredProductDTO";

interface PriceTableInterface {
    data : MallInfoAndPrice[]
}

const props = defineProps<PriceTableInterface>();

</script>

<style scoped>
.table-title {
    margin-bottom: 5px;
}

thead tr {
    background-color: rgba(213, 193, 173, 0.3);
    border: 1px solid rgba(213, 193, 173, 1);
    font-size: 16px;
}

tr th {
    border-collapse: collapse;


}
</style>