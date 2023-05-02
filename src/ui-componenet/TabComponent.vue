<template>
	<div class="tab-container">
		<ul class="flex-container" @submit.prevent>
			<li v-for="(item, index) in datas" :key="index">
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

// import { IconLabel } from "../ui-interface/IconLabelInterface";
import { ref } from 'vue';
import IconLabelRadioButton from "@/ui-componenet/button/IconLabelRadioButton.vue";
import {IconLabelInterface} from "@/ui-interface/IconLableInterface";

const datas : IconLabelInterface[] = [
    { iconValue : "home", label : "Home" },
    { iconValue : "bookmark", label : "Wishlist"},
    { iconValue : "account_balance_wallet", label : "AccountBook" },
    { iconValue : "shopping_bag", label : "Shopping" }
]
interface TabsInterface {
    name? : string
}

const props = withDefaults(defineProps<TabsInterface>(), {
    name : "default"
})

const selectedRadio = ref<string>("");


</script>