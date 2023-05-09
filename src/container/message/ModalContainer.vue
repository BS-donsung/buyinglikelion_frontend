<template>
	<div class="modal-area" v-if="modalService.active">
		<div class="modal-background" @click="handleClose">
		</div>
		<div class="modal-container">
			<div class="modal-header">
				<h2>{{currentMessage.header}}</h2>
			</div>
			<div class="modal-contents">
				<span>{{currentMessage.contents}}</span>
			</div>
			<div class="modal-action">
				<button class="pointer pos-btn" v-if="currentMessage.positive_action !== undefined" @click="handlePositiveAction">
					{{currentMessage.positive_action.text}}
				</button>
				<button class="pointer neg-btn" v-if="currentMessage.negative_action !== undefined" @click="handleNegativeAction">
					{{currentMessage.negative_action.text}}
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import { useModalServiceStore } from "@/store/ui/UiModalService";
import {computed, onMounted, ref} from "vue";

const modalService = ref(useModalServiceStore().service);

const currentMessage = computed(() => {
	return modalService.value.getCurrentMessage().get()
})

function handlePositiveAction() {
    if(currentMessage.value.positive_action) {
        currentMessage.value.positive_action.action()
    }
    handleClose()
}
function handleNegativeAction() {
    if(currentMessage.value.negative_action) {
        currentMessage.value.negative_action.action()
    }
    handleClose()
}
function handleClose() {
    modalService.value.closeMessage()
}

</script>

<style scoped lang="scss">
@use "@style/color" as color;
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba($color: black, $alpha: 0.7);
    z-index: 9;
}

.modal-container {
    min-width : 35rem;
}

.modal-container {
    position: fixed;
    left: 50%;
	top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    display: flex;
    flex-direction: column;
    padding: 1.5rem 3rem;
    border-radius: 1.5rem;
    background-color: color.$gray-50;
	gap : 1.5rem;

    & > * {
        margin: 1rem 0;
    }

    & > .modal-action {
        display: flex;
	    flex-direction: column;
	    gap: 1.5rem;
	    margin-top: auto;

        & > button {
            background-color: color.$gray-300;
            width: 100%;
            font-weight: 700;

            &.pos-btn {
                background-color: rgba(color.$color-main, 0.9);
            }

            &.neg-btn {
                background-color: rgba(color.$color-point, 0.9);
	            color: white;
            }
        }
    }
}

.modal-contents {
	font-size: 1.8rem;
}

</style>