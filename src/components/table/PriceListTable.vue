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

import {MallInfoAndPrice} from "@/dto/RegisteredProductDTO";
import MallAndPriceComponent from "@/components/table/MallAndPriceComponent.vue";
import {computed, ComputedRef} from "vue";

interface MallAndPriceComponentProps {
    data : MallInfoAndPrice[]
}

const props = defineProps<MallAndPriceComponentProps>();

const sortMallAndPriceList : ComputedRef<MallInfoAndPrice[]> =
	computed( () => {
        return props.data.sort( (lhs, rhs) => lhs.price - rhs.price)
	})

</script>

<style scoped>
.table-title {
    margin-bottom: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
	border-spacing: 1rem;
}

th {
    text-align: center;
}

thead tr {
    background-color: rgba(213, 193, 173, 0.3);
    border: 1px solid rgba(213, 193, 173, 1);
    font-size: 2rem;
}
</style>