<template>
	<SearchContainer :request-query="query" />
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import SearchContainer from "@/container/SearchContainer.vue";
import Validator from "@/util/Validator";

interface SearchPageRouteProps { query? : string }
const props = defineProps<SearchPageRouteProps>();

onMounted(() => {
    if(props.query !== undefined) {
		// processing query
	    if(Validator.isValidURL(props.query)) {
            // url=${props.query} 보내기

	    } else {
            // product=${props.query} 보내기
	    }
    }
})
</script>
