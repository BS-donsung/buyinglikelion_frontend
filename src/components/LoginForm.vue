<template>
	<form
			class="flex-container"
			@submit.prevent="handleSubmit">
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" ref="inputOfPrincipal"><br><br>
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" ref="inputOfCredential"><br><br>
		<input type="submit" value="Submit">
	</form>
</template>

<script setup lang="ts">

import { ref } from "vue";

const inputOfPrincipal = ref<HTMLInputElement | null>(null)
const inputOfCredential = ref<HTMLInputElement | null>(null)

function handleSubmit(){
    console.log("input0", inputOfPrincipal.value?.value)
    console.log("input1", inputOfCredential.value?.value)
}

</script>

<style scoped>

</style>