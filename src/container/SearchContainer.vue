<template>
	<section class="input-container">
		<SearchForm :query="inputState.query" :onsummit="handleSearchQuery"/>
	</section>
	<section class="history-container">

	</section>
	<section class="search-result" >
		<div>Result for <span>{{inputState.query}}</span></div>
		<div v-for="(item, index) in dummyWishList">
			<ItemComponent
					:index="index"
					:product="item" />
		</div>
	</section>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import SearchForm from "@/ui-componenet/SearchForm.vue";
import { useRouter} from "vue-router";
import ItemComponent from "@/ui-componenet/ItemComponent.vue"
import { dummyWishList } from "@/dummy/DummyWishList";

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