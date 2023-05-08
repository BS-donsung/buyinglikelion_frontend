<template>
	<ul class="flex-container align-controller" :style="WishListControllerStyle">
		<li v-for="(data, index) in sortedList" key="index">
			<MainColorButton
					:active="data.value === state.currentValue"
					:value="data.title"
					:style="WishListControllerButtonStyle"
					:onClick="() => handleButton(data.value)"
			/>
		</li>
	</ul>
</template>

<script setup lang="ts">

import {
    WishListControllerButtonStyle,
    WishListControllerStyle
} from "@style/css-properties/WishListControllerButtonStyle";
import {computed, reactive} from "vue";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";

export interface ButtonInTabInterface {
    title : string,
	value : string
}
interface ButtonTabsProps {
    initValue? : string;
    onChange? : ( value : string) => void
    list : ButtonInTabInterface[],
	notChangePosition? : boolean
}

const props = withDefaults(defineProps<ButtonTabsProps>(), {
    initValue : "",
	notChangePosition : false,
	onChange : (value) => {}
})

if(props.list.length < 1) {
    throw new Error("ButtonTab은 1이상의 ButtonTabsInterface 구현체가 필요합니다.");
}

const state = reactive({
	currentValue : props.initValue ?? props.list[0].value
})

const sortedList = computed(() => {
    if(props.notChangePosition) {
        return props.list;
    } else {
        return props.list.sort( (lhs, rhs) => {
            if (lhs.value === state.currentValue) return -1;
            if (rhs.value === state.currentValue) return 1;

            // 대소문자 구분 없이 정렬하려면 toLowerCase() 사용
            if (lhs.value.toLowerCase() < rhs.value.toLowerCase()) return -1;
            if (lhs.value.toLowerCase() > rhs.value.toLowerCase()) return 1;
        } )
    }
})

function handleButton( value : string ) {
    state.currentValue = value;
    props.onChange(value);
}

</script>


<style scoped lang="scss">

.align-controller {
    justify-content: end;

    & > * {
        margin-left: 1rem;
    }
}

</style>