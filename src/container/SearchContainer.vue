<template>
	<section class="input-container">
		<SearchForm :query="inputState.query" :onsummit="handleSearchQuery"/>
	</section>
	<section class="history-container">

	</section>
	<section class="search-result" >
		<div>Result for <span>{{inputState.query}}</span></div>
		<div>
			<ItemComponent />
		</div>
	</section>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import SearchForm from "@/ui-componenet/SearchForm.vue";
import { useRouter} from "vue-router";

const router = useRouter();
interface SearchContainerInterface {
    requestQuery? : string
}
const props = withDefaults(defineProps<SearchContainerInterface>(), {
    requestQuery : ""
})

const inputState = reactive({
	query : props.requestQuery
})

function handleSearchQuery( queryString : string ) {
    inputState.query = queryString
	router.push(`/search?q=${inputState.query}`)
}
</script>