<template>
	<div>
		<button @click="state.showModal = true">모달 열기</button>
		<div v-if="state.showModal" class="modal">
			<div class="modal-content">
				<h2 v-if="props.title">{props?.title}</h2>
				<p>{propss.content}</p>
				<button @click="() => { state.showModal = false; props.action()}">닫기</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import {reactive} from "vue";

const props = defineProps<{title? : string, content : string, action : () => void }>()

const state = reactive({
	showModal : true
})

</script>

<style>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
}
</style>