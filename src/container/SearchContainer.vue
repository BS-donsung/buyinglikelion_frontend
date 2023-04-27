<template>
	<section class="input-container">
		<SearchForm :query="inputState.query" :onsummit="handleSearchQuery"/>
	</section>
	<section class="history-container">

	</section>
	<section class="search-result" >
		<div>Result for <span>{{inputState.query}}</span></div>
	</section>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import SearchForm from "@/ui-componenet/SearchForm.vue";

interface SearchContainerInterface {
    requestQuery : string
}
const props = withDefaults(defineProps<SearchContainerInterface>(), {
    requestQuery : ""
})

const inputState = reactive({
	query : props.requestQuery
})

function handleSearchQuery( queryString : string ) {
    inputState.query = queryString
	console.log(inputState.query)
}




</script>