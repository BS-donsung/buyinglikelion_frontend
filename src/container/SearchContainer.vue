<template>
	<section class="input-container">
		<SearchForm
				:query="props.initQuery"
				:placeholder="props.placeholder"
				:onsummit="handleSearchQuery"
		/>
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
	placeholder? : string
}
const props = withDefaults(defineProps<SearchContainerProps>(), {
    initQuery : "",
	placeholder : "검색어나 쇼핑몰 URL을 입력해 주세요."
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