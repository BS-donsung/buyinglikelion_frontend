<template>
	<button :class="props.active ? 'active' : ''" :style="props.style">
		{{ props.value }}
	</button>
</template>

<script setup lang="ts">
import {CSSProperties} from "vue";

interface ButtonInterface {
    active : boolean,
    value : string,
	style? : CSSProperties
}
const props = withDefaults(defineProps<ButtonInterface>(), {
    active : false,
    value : "",
    style : {}
})
</script>


<style scoped lang="scss">
@use "@style/color" as color;

button {
	color: color.$color-point;
    border: 3px solid color.$color-point;
    background-color: color.$gray-50;

	&:active, &:hover, active {
        color: color.$gray-50;
        background-color: color.$color-point;
	}
}
</style>
