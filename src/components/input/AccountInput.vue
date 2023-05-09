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
					type="number"
					@keydown="enterToNext">
				<template v-slot:prepend-inner>
					<span class="material-symbols-outlined">request_quote</span>
				</template>
			</v-text-field>
		</div>

		<div class="element" v-if="inputState.order == 4">
			<v-text-field
					label="Product Image URL"
					variant="outlined"
					v-model="inputState.image"
					@keydown="enterToNext">
				<template v-slot:prepend-inner>
					<span class="material-symbols-outlined">image</span>
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
				v-if="inputState.order !== lastOrder"
				ref="ele02"
		/>
		<MainColorButton
				value="추가하기" active
				class="order-next-btn"
				:on-click="handleSumiit"
				v-if="inputState.order > essentialStepOrder"
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
    price : number,
	image : string
}

interface AccountInputProps {
    onSummit? : ( dto : CreateAccountDTO ) => void
}

const props = withDefaults(defineProps<AccountInputProps>(), {
    onSummit : () => {}
})


const inputState = reactive({
	date : StrictDate.ofDate().toString(),
	product : "",
	price : 0,
    image : "",
	order : 1
})
const essentialStepOrder : number = 3;
const lastOrder : number = 4;

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
        if( inputState.order < lastOrder ) {
            ++(inputState.order)
            focusOn()
        } else {
            props.onSummit({
	            product : inputState.product,
	            price : inputState.price,
	            image : inputState.image,
                date : StrictDate.ofFormattedString(inputState.date)
            })
        }
    }
}

function handleSumiit() {
    props.onSummit({
        date : StrictDate.ofFormattedString(inputState.date),
        product : inputState.product,
        price : inputState.price,
        image : inputState.image
    })
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
	margin: 1rem 0;

	& > .order-prev-btn {

	}

    & > .order-next-btn {
		margin-left: auto;
    }
}
</style>