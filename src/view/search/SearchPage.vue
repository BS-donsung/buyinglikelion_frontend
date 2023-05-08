<template>
	<div>
		<SearchContainer :init-query="query"/>
		<div v-if="url">
			<ProductDetailContainer :url="url" />
		</div>
		<div v-else-if="query">
			<!-- 태그를 사용한 검색 결과를 표시합니다 -->

		</div>
		<div v-else>
			<!-- 검색 결과가 없거나, 잘못된 파라미터를 표시합니다 -->
			<p>검색 결과가 없습니다.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import {computed, ComputedRef, onUpdated, ref} from 'vue'
import { useRoute } from 'vue-router'
import SearchContainer from "@/container/SearchContainer.vue";
import ProductDetailContainer from "@/container/productdetail/ProductDetailContainer.vue";

const route = ref(useRoute())

const url: ComputedRef<string | undefined> = computed(() => route.value.query.url as string | undefined)
const query: ComputedRef<string | undefined> = computed(() => route.value.query.query as string | undefined)

</script>