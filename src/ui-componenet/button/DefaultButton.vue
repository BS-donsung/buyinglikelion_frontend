<template>
	<button :class="props.active ? 'active' : ''">
		{{ props.value }}
	</button>
</template>

<script setup lang="ts">
interface ButtonInterface {
    active : boolean,
    value : string
}

const props = withDefaults(defineProps<ButtonInterface>(), {
    active : false,
    value : ""
})
</script>