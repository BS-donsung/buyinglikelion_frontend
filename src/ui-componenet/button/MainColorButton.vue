<template>
	<div
			class="inline-block"
			@mouseover="state.isHovered = true"
			@mouseout="state.isHovered = false"
			@mousedown="state.isActive = true"
			@mouseup="state.isActive = false"
			@mouseleave="state.isActive = false">
	<a v-if="props.to !== undefined && props.outlink" :href="props.to">
		<button :class="props.active ? 'active' : ''" :style="props.style" @click="props.onClick">
			{{ buttonValue }}
		</button>
	</a>
	<router-link v-else-if="props.to !== undefined" :to="props.to">
		<button :class="props.active ? 'active' : ''" :style="props.style" @click="props.onClick">
			{{ buttonValue }}
		</button>
	</router-link>
	<span v-else>
		<button :class="props.active ? 'active' : ''" :style="props.style" @click="props.onClick">
			{{ buttonValue }}
		</button>
	</span>
	</div>
</template>

<script setup lang="ts">
import {computed, CSSProperties, reactive} from "vue";

interface ButtonInterface {
    value : string,
    active? : boolean,
	hoveValue? : string
	style? : CSSProperties,
	to? : string,
	outlink? : boolean
	onClick? : () => void;
}
const props = withDefaults(defineProps<ButtonInterface>(), {
    active : false,
    value : "",
    style : {},
    outlink : false,
	onClick : () => {}
})

interface MainColorButtonState{
    isHovered : boolean,
	isActive : boolean
}

const state = reactive<MainColorButtonState>({
    isHovered : false, isActive : false
});

const buttonValue = computed(() => {
    if(props.hoveValue) {
        const { isHovered, isActive } = state;
        if(isHovered || isActive ) {
            console.log("hover || isActive")
            return props.hoveValue;
        }
    }
    return props.value
})


</script>


<style scoped lang="scss">
@use "@style/color" as color;

button {
    border: 3px solid color.$color-point;
	color: color.$color-point;
    background-color: color.$gray-50;

	&:hover  {
        color: color.$gray-50;
        background-color: color.$color-point;
	}

	&.active {
        color: color.$gray-50;
        background-color: color.$color-point;

		&:hover {
            color: color.$gray-50;
            background-color: color.$color-point;
		}
	}
}
button.active:active, button.active:hover {
    color: color.$color-point;
    background-color: color.$gray-50;
}
</style>
