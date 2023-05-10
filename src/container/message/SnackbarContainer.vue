<template>
	<div class="snackbar-container" v-if="snackbarService.active">
		<div>
			<div class="icon-container" :style="`background-color: ${iconColor}`">
				<span v-if="currentMessage.positive" class="material-symbols-outlined icon">done</span>
				<span v-else class="material-symbols-outlined icon">close</span>
			</div>
		</div>
		<div class="snackbar-content pointer">
			<span>{{ currentMessage.message }}</span>
		</div>
		<div @click="handleClose" class="pointer">
			close
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSnackbarService } from "@/store/ui/UISnackbarService";
import {computed, ref} from "vue";

const snackbarService = ref(useSnackbarService().service);
const currentMessage = computed(() => {
    return snackbarService.value.getCurrentMessage().get()
})
const iconColor = computed(() => {
    return currentMessage.value.positive ? "#00E676" : "#F44336";
})
function handleClose() {
    snackbarService.value.closeMessage()
}

</script>

<style scoped lang="scss">
@use "@style/color" as color;
@use "@style/mixin" as mixin;

.icon-container {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;

    & > .icon {
        color: color.$gray-50;
        font-size: 2rem;
    }
}

.snackbar-content {
    min-width: 10rem;
}

.snackbar-container {
    position: fixed;
    top: 3rem;
    left: 50%;
	transform: translateX(-50%);

    display: flex;
    align-items: center;
    background-color: rgba($color: black, $alpha: 0.8);
    color: white;

    border-radius: 1.5rem;
    gap : 1rem;
    padding : 1.3rem 4rem;

	z-index: 7;

    & > * {
        @include mixin.font-size-and-transform-y-for-icon(2);

        &:first-child, &:last-child {
            margin: 0 2rem;
        }
    }
}
</style>