<template>
	<ProductDetail :product="state.product" />
	<RecommendTab />
</template>

<script setup lang="ts">

import ProductDetail from "@/ui-componenet/ProductDetail.vue";
import { dummyWishList } from "@/dummy/DummyWishList";
import {reactive} from "vue";
import RecommendTab from "@/ui-componenet/RecommendTab.vue";

const state = reactive({
	product : dummyWishList[0]
})
</script>

<style scoped>

</style>