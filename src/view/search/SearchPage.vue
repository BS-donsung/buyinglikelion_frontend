<template>
	<div>
		<div class="search-container-adapter">
			<SearchContainer :init-query="query"/>
		</div>
		<div v-if="url">
			<ProductDetailContainer :url="url" />
		</div>
		<div v-else-if="query">
			<!-- 태그를 사용한 검색 결과를 표시합니다 -->
			<ProductListContainer :query="query" />
		</div>
		<div v-else>
			<p>검색 결과가 없습니다.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import {computed, ComputedRef, ref} from 'vue'
import { useRoute } from 'vue-router'
import SearchContainer from "@/container/SearchContainer.vue";
import ProductDetailContainer from "@/container/ProductDetailContainer.vue";

import { ItemComponentProps } from '@/ui-componenet/ItemComponent.vue';
import ProductListContainer from '@/container/ProductListContainer.vue';
import MainSearchBanner from "@/ui-componenet/banner/MainSearchBanner.vue";

const route = ref(useRoute())

const url: ComputedRef<string | undefined> = computed(() => route.value.query.url as string | undefined)
const query: ComputedRef<string | undefined> = computed(() => route.value.query.query as string | undefined)

</script>

<style scoped lang="scss">

.search-container-adapter {
	padding: 5rem 10rem;
}
</style>