<template>
	<ProductDetailContainer :url="props.url" />
</template>

<script setup lang="ts">

import ProductDetailContainer from "@/container/ProductDetailContainer.vue";

interface ProductDetailPageInterface {
    url : string
}
const props = defineProps<ProductDetailPageInterface>()
</script>
