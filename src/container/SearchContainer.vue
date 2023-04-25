<template>
	<section class="input-container">

	</section>
	<section class="history-container">

	</section>
	<section class="search-result" >
		<div>Result for <span>{{state.query}}</span></div>
	</section>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";

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