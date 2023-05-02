<template>
	<v-snackbar
			z-index="10"
			v-if="snackbarService.active"
			v-model="snackbarService.active"
			vertical>
		<div
				v-if="currentMessage.header != undefined"
				class="text-subtitle-1 pb-2">
			{{currentMessage.header}}
		</div>
		<p>{{currentMessage.contents}}</p>
		<template v-slot:actions>
			<v-btn
					color="indigo"
					variant="text"
					@click="snackbarService.deactivate()">
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script setup lang="ts">
import { useSnackbarService } from "@/store/ui/UISnackbarService";
import {computed, ref} from "vue";

const snackbarService = ref(useSnackbarService().service);

const currentMessage = computed(() => {
    return snackbarService.value.getCurrentMessage().get()
})

</script>