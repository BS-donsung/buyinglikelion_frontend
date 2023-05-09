<template>
	<div>
		<h1 class="title">{{ title }}&nbsp;&nbsp;&gt;</h1>
		<div class="flex-container image-container">
			<div
					v-for="(item, index) in props.items"
					:key="index"
					class="image-component"
			>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

export interface ImageItem {
    src : string
}

interface VerticalImageListComponentProps {
    title : string
    items : ImageItem[]
}

const props = defineProps<VerticalImageListComponentProps>()

</script>


<style scoped lang="scss">
@use "@style/color" as color;

.image-container {
	margin: 1rem 0;
	gap: 1rem;
}

.image-component {
	width: 16rem;
	height: 16rem;
	background-color: color.$gray-100;
	background-repeat: no-repeat;
	background-position: center center;
	background-size: contain;
}
</style>