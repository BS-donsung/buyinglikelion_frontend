<template>
	<WishItemDetailContainer :id="wishlistId"/>
</template>

<script setup lang="ts">
import WishItemDetailContainer from "@/container/wishitem/WishItemDetailContainer.vue";
import {computed } from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const wishlistId = computed(() => parseInt(route.params.id as string));
</script>

