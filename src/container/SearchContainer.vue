<template>
	<section class="input-container">
		<SearchForm :query="props.initQuery" :onsummit="handleSearchQuery"/>
	</section>
	<section class="history-container">

	</section>
</template>

<script setup lang="ts">
import SearchForm from "@/ui-componenet/SearchForm.vue";
import { useRouter } from "vue-router";
import Validator from "@/util/Validator";

interface SearchContainerProps {
    initQuery? : string
}
const props = withDefaults(defineProps<SearchContainerProps>(), {
    initQuery : ""
})

const router = useRouter();

function handleSearchQuery( queryString : string ) {
    if(Validator.isValidURL(queryString)) {
        // url이면 바로 /search/product로
        router.push(`/search/product?url=${queryString}`)
    } else {
        router.push(`/search/product?query=${queryString}`)
    }
}

</script>