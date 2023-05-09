<template>
	<button :class="props.active ? 'active' : ''" @click="() => props.onClick?.()">
		{{ props.value }}
	</button>
</template>

<script setup lang="ts">
interface ButtonInterface {
    active? : boolean,
    value? : string,
	onClick? : () => void
}

const props = withDefaults(defineProps<ButtonInterface>(), {
    active : false,
    value : ""
})
</script>

<style scoped lang="scss">
@use "@style/color" as color;

button {
    border: 3px solid color.$gray-100;
	background-color: color.$gray-100;

	&:hover {
        border: 3px solid color.$gray-200;
        background-color: color.$gray-200;
	}

	&:active {
        border: 3px solid color.$gray-300;
        background-color: color.$gray-300;
	}
}
</style>