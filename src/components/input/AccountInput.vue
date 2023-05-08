<template>
	<div class="account-input-container">
	<div class="account-input-area">
		<div class="element" v-if="inputState.order == 1">
			<v-text-field
					label="Date"
					variant="outlined"
					v-model="inputState.date"
					@keydown="enterToNext">
				<template v-slot:prepend-inner>
					<span class="material-symbols-outlined">calendar_month</span>
				</template>
			</v-text-field>
		</div>
		<div class="element" v-if="inputState.order == 2">
			<v-text-field
					label="Product name"
					variant="outlined"
					v-model="inputState.product"
					@keydown="enterToNext">
				<template v-slot:prepend-inner>
					<span class="material-symbols-outlined">inventory</span>
				</template>
			</v-text-field>
		</div>
		<div class="element" v-if="inputState.order == 3">
			<v-text-field
					label="Price"
					variant="outlined"
					v-model="inputState.price"
					@keydown="enterToNext">
				<template v-slot:prepend-inner>
					<span class="material-symbols-outlined">request_quote</span>
				</template>
			</v-text-field>
		</div>
	</div>
	<div class="flex-container order-controller">
		<MainColorButton
				value="이전"
				class="order-prev-btn"
				:on-click="setPrev"
				v-if="inputState.order !== 1"
				ref="ele01"
		/>
		<MainColorButton
				value="다음" active
				class="order-next-btn"
				:on-click="setNext"
				v-if="inputState.order !== 3"
				ref="ele02"
		/>
		<MainColorButton
				value="추가하기" active
				class="order-next-btn"
				v-if="inputState.order === 3"
				ref="ele03"
		/>
	</div>
	</div>
</template>

<script setup lang="ts">

import {reactive, ref} from "vue";
import {StrictDate} from "@/util/StrictDate";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";

export interface CreateAccountDTO {
    date : StrictDate,
    product : string,
    price : number
}

interface AccountInputProps {
    onSummit? : ( dto : CreateAccountDTO ) => void
}

const props = withDefaults(defineProps<AccountInputProps>(), {
    onSummit : () => {}
})


const inputState = reactive({
	date : StrictDate.ofDate(),
	product : "",
	price : 0,
	order : 1
})

const ref02 = ref<HTMLInputElement | null>(null);
const ref03 = ref<HTMLInputElement | null>(null);

const focusOn = () => {
    switch(inputState.order) {
	    case 2 :
            ref02.value?.focus()
		    return;
	    case 3 :
            ref03.value?.focus()
		    return;
    }

}
const setPrev = () => { --(inputState.order); focusOn() }
const setNext = () => { ++(inputState.order); focusOn() }

function enterToNext( event : KeyboardEvent ) {
    if(event.key === "Enter") {
        if( inputState.order < 3 ) {
            ++(inputState.order)
            focusOn()
        } else {
            props.onSummit({
	            date : inputState.date,
	            product : inputState.product,
	            price : inputState.price
            })
        }
    }
}

</script>

<style scoped lang="scss">
.account-input-container {
    max-width: 48rem;
}
.account-input-area {
    position: relative;
    height: 8rem;
}
.element {
    padding: 1.2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    &.active {
        opacity: 1;
        animation-name: fade-out;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
}


@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade-out {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.order-controller {


	& > .order-prev-btn {

	}

    & > .order-next-btn {
		margin-left: auto;
    }
}
</style>