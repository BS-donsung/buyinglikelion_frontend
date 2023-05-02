<template>
	<div>
		<input
				type="radio"
				style="display: none;"
				:id="props.value"
				:name="props.group"
				:value="props.value"
				@input="handleChangeValue"/>
		<IconLabelComponent :icon-value="props.iconValue" :value="props.label" />
	</div>
</template>

<script setup lang="ts">
import IconLabelComponent from "@/ui-componenet/button/IconLabelComponent.vue";

interface IconLabelProps {
    iconValue : string;
    label : string;
    group : string;
    value : string;
    modelValue : string;
}

const props = withDefaults(defineProps<IconLabelProps>(), {});


interface IconLabelEmits {
    (e : "update:modelValue", payload : string ) : void
}

const emit = defineEmits<IconLabelEmits>()

function handleChangeValue( event : Event ) {
    emit("update:modelValue", (event.target as HTMLInputElement).value)
}
</script>
