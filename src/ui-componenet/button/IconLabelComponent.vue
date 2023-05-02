<template>
	<router-link
			v-if="props.to !== undefined"
			:to="props.to">
		<label
				class="item pointer"
				:for="props.value">
		<span class="material-symbols-outlined">
			{{ props.iconValue }}
		</span>
			<span>
			{{ props.value }}
		</span>
		</label>
	</router-link>
	<label
			v-else
			class="item pointer"
			:for="props.value">
		<span class="material-symbols-outlined">
			{{ props.iconValue }}
		</span>
		<span>
			{{ props.value }}
		</span>
	</label>
</template>

<script setup lang="ts">
interface IconLabelInterface {
    iconValue : string;
    value : string;
    to? : string;
}

const props = defineProps<IconLabelInterface>()

</script>

<style scoped lang="scss">
@use "@style/color.scss" as color;
@use "@style/mixin.scss" as mixin;
.item {
    display: flex;
    align-items: center;

    & > * {
        font-size: 2rem;
        margin-left: 1rem;

        &:last-child {
            @include mixin.font-size-and-transform-y-for-icon(2)
        }
    }
}

input[type="radio"]:checked + label {
    border-bottom: 1px solid color.$gray-700;
}
</style>