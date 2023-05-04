<template>
	<div class="image-container" :style="props.style">
		<img src="@asset/logo.svg">
		<div
				v-if="props.guideMessage.length !== 0"
				class="guide-message">
			{{props.guideMessage}}
		</div>
	</div>

</template>

<script setup lang="ts">

import {CSSProperties} from "vue";

interface PendingComponent {
    guideMessage? : string;
    style? : CSSProperties
}

const props = withDefaults(defineProps<PendingComponent>(), {
    guideMessage : "",
	style : {
        width : "20rem"
	}
})

</script>

<style scoped lang="scss">

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.image-container {
	& > img {
        -webkit-animation: rotate 3s linear infinite;
        animation: rotate 3s linear infinite;
    }
}

</style>