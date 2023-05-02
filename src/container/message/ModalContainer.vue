<template>
	<div class="modal-area" v-if="modalService.active">
		<div class="modal-background" @click="handleClose">
		</div>
		<div class="modal-container">
			<div class="modal-header">
				<h4>{{currentMessage.header}}</h4>
			</div>
			<div class="modal-contents">
				<span>{{currentMessage.contents}}</span>
			</div>
			<div class="modal-action">
				<button v-if="currentMessage.positive_action !== undefined" @click="handlePositiveAction">
					{{currentMessage.positive_action.text}}
				</button>
				<button v-if="currentMessage.negative_action !== undefined" @click="handleNegativeAction">
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
    if(currentMessage?.value?.positive_action) {
        currentMessage.value.positive_action.action()
    }
    handleClose()
}
function handleNegativeAction() {
    if(currentMessage?.value?.negative_action) {
        currentMessage.value.negative_action.action()
    }
    handleClose()
}
function handleClose() {
    modalService.value.closeMessage()
}

onMounted(() => {
    console.log("modalService.value.active before", modalService.value.active)
    modalService.value.activate({ header : "Header", contents : "This is Message"})
    console.log("modalService.value.active after", modalService.value.active)
})

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
    min-width : 300px;
    bottom: 0;
    transform: translateX(-50%);
}

.modal-container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);

    z-index: 10;

    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background-color: color.$gray-50;
    // box-shadow: 0 0 1.5rem 0.5rem color.$gray-300;
    max-width: 36rem;

    & > * {
        margin: 1rem 0;
    }

    & > .modal-action {
        display: flex;

        & > button {
            background-color: color.$gray-300;
            width: 100%;
        }
    }
}
</style>