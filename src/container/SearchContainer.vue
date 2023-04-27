<template>
	<section class="input-container">
		<SearchForm />
	</section>
	<section class="history-container">

	</section>
	<section class="search-result" >
		<div>Result for <span>{{state.query}}</span></div>
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

const state = reactive({
	query : props.requestQuery
})


</script>