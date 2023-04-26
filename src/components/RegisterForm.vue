<template>
	<h1>Regster</h1>
	<form @submit.prevent="handleSubmit" class="login-form">
		<v-text-field
				:counter="10"
				label="Username"
				variant="outlined"
				v-model="inputState.username">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">account_circle</span>
			</template>
		</v-text-field>
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
		<v-text-field
				type="password"
				:counter="10"
				label="Checking Passoword"
				variant="outlined"
				v-model="inputState.retypedCredential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<div class="confirm-area">
			<v-btn type="submit" color="#A3353E" to="/auth/register" @click="handleSummit">
				<span class="font-white font-weight-700">가입하기</span>
			</v-btn>
		</div>
	</form>
</template>

<script setup lang="ts">
import Checkbox from "@/ui-componenet/Checkbox.vue";
import { reactive} from "vue";
import { useRouter } from "vue-router"

import { CreateUserDTO } from "@/dto/UserDTO";
import {useAuthStore} from "@/store/AuthStore";

const router = useRouter()
const store = useAuthStore();

const inputState = reactive({
	username  : "",
    principal : "",
    credential: "",
	retypedCredential : ""
})

async function handleSummit() {
	// validation
	const { username, principal, credential } = inputState
	const dtoForCreate = new CreateUserDTO(username, principal, credential)


	const result = await store.authService.register(dtoForCreate);
    if(result.isPresent){
        // error processing
	    alert(result.get()?.message ?? "에러가 발생했습니다.")
    } else {
        // success processing
        router.push("/");
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