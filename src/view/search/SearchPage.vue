<template>
	<SearchContainer request-query="query" />
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import SearchContainer from "@/container/SearchContainer.vue";

interface SearchPageRouteProps { query? : string }
const props = defineProps<SearchPageRouteProps>();


onMounted(() => {
    if(props.query !== undefined) {
		// processing query
    }
})

</script>

<style scoped>

</style>