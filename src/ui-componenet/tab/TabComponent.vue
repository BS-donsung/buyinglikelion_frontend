<template>
	<div class="tab-container">
		<ul class="flex-container" @submit.prevent>
			<li v-for="(item, index) in props.labels" :key="index">
				<IconLabelRadioButton
						:id="index"
						:iconValue="item.iconValue"
						:label="item.label"
						:group="props.name"
						:value="item.label"
						v-model="selectedRadio"/>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import IconLabelRadioButton from "@/ui-componenet/button/IconLabelRadioButton.vue";
import {IconLabelInterface} from "@/ui-interface/IconLableInterface";

interface TabsInterface {
    labels : IconLabelInterface[]
    name? : string
}

const props = withDefaults(defineProps<TabsInterface>(), {
    name : "default"
})

const selectedRadio = ref<string>("");


</script>