<template>
	<button :class="props.active ? 'active' : ''" :style="props.style">
		<a v-if="props.to !== undefined && props.outlink" :href="props.to">
			{{ props.value }}
		</a>
		<router-link v-else-if="props.to !== undefined" :to="props.to">
			{{ props.value }}
		</router-link>
		<span v-else>
			{{ props.value }}
		</span>
	</button>
</template>

<script setup lang="ts">
import {CSSProperties} from "vue";

interface ButtonInterface {
    active : boolean,
    value : string,
	style? : CSSProperties,
	to? : string,
	outlink? : boolean
	onClick? : (boolean) => void
}
const props = withDefaults(defineProps<ButtonInterface>(), {
    active : false,
    value : "",
    style : {},
    outlink : false
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
