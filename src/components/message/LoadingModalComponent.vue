<template>
	<div class="modal-background">
		<div class="modal-container">
			<img src="@asset/logo.svg" class="animated-image-swing" />
			<div
					v-if="props.guideMessage.length !== 0"
					class="guide-message">
				{{props.guideMessage}}
			</div>
		</div>

	</div>

</template>

<script setup lang="ts">

import {ProcessStatus } from "@/util/ProcessState";

interface LoadingModalComponentProps {
	guideMessage? : string

}

const props = withDefaults(defineProps<LoadingModalComponentProps>(), {
    guideMessage : ""
})

</script>

<style scoped lang="scss">
@use "@style/color" as color;
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba($color: black, $alpha: 0.7);
    z-index: 9;
}

.modal-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

	& > img {
		width: 30rem;
	}

	& > div {
		color: white;
		text-align: center;
		font-size: 2.5rem;

		margin: 1.5rem;
	}
}
</style>