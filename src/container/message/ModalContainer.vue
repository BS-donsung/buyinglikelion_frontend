<template>
	<v-layout>
		<v-dialog
				v-if="modalService.active"
				v-model="modalService.active"
				persistent
				width="500">
			<v-card
					class="mx-auto"
					max-width="480">
				<v-card-item>
					<div>
						<div class="card-header margin-bottom-1rem">
							<h3>{{currentMessage.header}}</h3>
						</div>
						<div class="card-message margin-bottom-1rem">
							{{currentMessage.contents}}
						</div>
					</div>
				</v-card-item>

				<div class="card-action">
					<div class="default_action flex-container justify-content-end"
					     v-if="noAction">
						<v-btn
								@click="handleClose"
								variant="outlined">
							확인
						</v-btn>
					</div>
					<div v-else class="flex-container justify-content-end">
						<v-btn
								v-if="currentMessage.positive_action"
								@click="handlePositiveAction"
								color="orange-lighten-2"
								variant="outlined">
							{{currentMessage.positive_action.text}}
						</v-btn>
						<v-btn
								v-if="currentMessage.negative_action"
								@click="handleNegativeAction"
								color="orange-lighten-2"
								variant="outlined">
							{{currentMessage.negative_action.text}}
						</v-btn>
					</div>
				</div>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script setup lang="ts">

import { useModalServiceStore } from "@/store/ui/UiModalService";
import {computed, ref} from "vue";

const modalService = ref(useModalServiceStore().service);

const currentMessage = computed(() => {
	return modalService.value.getCurrentMessage().get()
})

const noAction = computed(() => {
    if(!modalService.value.getCurrentMessage().isPresent)
        return false;
    const message = modalService.value.getCurrentMessage().get()
    return (message.positive_action == undefined && message.negative_action == undefined)
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


</script>

<style scoped>

.card-action {
	margin-top: 1rem;
	padding: 0 24px 14px;
	justify-content: end;
}
</style>