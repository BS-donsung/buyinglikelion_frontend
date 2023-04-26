<template>
	<form @submit.prevent="handleSubmit" class="login-form">
		<v-text-field
				:counter="10"
				label="E-mail"
				variant="outlined"
				v-model="inputState.principal">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">account_circle</span>
			</template>
		</v-text-field>
		<v-text-field
				type="password"
				:counter="10"
				label="Passoword"
				variant="outlined"
				v-model="inputState.credential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<div class="flex-container column-direct confirm-area">
			<div class="flex-container">
				<Checkbox title="계정 기억하기" />
				<span class="margin-left-auto">비밀번호 찾기</span>
			</div>
			<v-btn type="submit" color="#F7CE46" :click="handleSubmit">
				<span class="font-weight-700">로그인</span>
			</v-btn>
			<v-btn type="submit" color="#A3353E" to="/auth/register">
				<span class="font-white font-weight-700">가입하기</span>
			</v-btn>
		</div>
		<v-snackbar
				v-model="mapStatusToVisibleSnackbar"
				:timeout="3000"
				top
				@input="handleSnackBar">
			{{snackBarState.message}}
		</v-snackbar>

	</form>
</template>

<script setup lang="ts">
import Checkbox from "@/ui-componenet/Checkbox.vue";
import {computed, reactive} from "vue";

import {AuthDTO} from "@/dto/UserDTO";
import {useAuthStore} from "@/store/AuthStore";
import {STATUS} from "@/util/ProcessState";

const store = useAuthStore();

const inputState = reactive({
	principal : "",
	credential: "",
})
const snackBarState = reactive({
	status : STATUS.INIT,
	message : ""
})

async function handleSubmit(){
    if(store.authService.isPending()) {
        return;
    }
    const dto = new AuthDTO(inputState.principal, inputState.credential)
	const result = await store.authService.login(dto)
	if(result.isPresent) {
        //error processing
        snackBarState.status = STATUS.FAILURE
		snackBarState.message = result.get().message
	}
}
const mapStatusToVisibleSnackbar = computed(() => {
    return snackBarState.status == STATUS.SUCCESS || snackBarState.status == STATUS.FAILURE;
})
function handleSnackBar( event ) {
    // init
    if(!event ) {
        snackBarState.status = STATUS.INIT
        snackBarState.message = ""
    }
}

</script>

<style scoped>
.confirm-area {
	& > * {
        margin-bottom: 2rem;
	}
}
.login-form {
	min-width: 35rem;
}
</style>