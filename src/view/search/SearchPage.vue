<template>
	Search
</template>

<script setup lang="ts">
import {onMounted} from "vue";

interface SearchPageRouteProps {
    query? : string
}
const props = defineProps<SearchPageRouteProps>();

onMounted(() => {
    if(props.query != undefined) {
        // tag
    }
})

</script>

<style scoped>

</style>