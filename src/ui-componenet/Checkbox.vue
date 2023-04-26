<template>
	<div class="pointer flex-container inline" @click="handleCheck">
		<span class="material-symbols-outlined" v-if="!state.isChecked">
			check_box_outline_blank
		</span>
		<span class="material-symbols-outlined" v-if="state.isChecked">
			check_box
		</span>
		<span>{{props.title}}</span>
	</div>
</template>

<script setup lang="ts">

import { reactive } from "vue";
interface CheckboxInterface {
    isChecked? : boolean
	title? : string
	oncheck? : ( isCheck : boolean ) => void
}
const props = withDefaults(defineProps<CheckboxInterface>(), {
    isChecked : false,
})
const state = reactive({ isChecked : props.isChecked })

function handleCheck() {
    state.isChecked = !state.isChecked;
    props?.oncheck?.(state.isChecked)
}
</script>
