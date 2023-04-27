<template>
	<h1>Regster</h1>
	<form @submit.prevent="handleSummit" class="login-form">
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
				:counter="8"
				label="Passoword"
				variant="outlined"
				v-model="inputState.credential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<v-text-field
				type="password"
				:counter="8"
				label="Checking Passoword"
				variant="outlined"
				v-model="inputState.retypedCredential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<div class="confirm-area flex-container">
			<router-link to="/auth/login">
				<v-btn type="submit" color="#A3353E" to="/auth/register" @click="handleSummit">
					<span class="font-white font-weight-700">로그인</span>
				</v-btn>
			</router-link>

			<v-btn type="submit" color="#A3353E" to="/auth/register" @click="handleSummit">
				<span class="font-white font-weight-700">가입하기</span>
			</v-btn>
		</div>
	</form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router"

import { CreateUserDTO } from "@/dto/UserDTO";
import {useAuthStore} from "@/store/AuthStore";
import Validator from "@/util/Validator";

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
	const { username, principal, credential, retypedCredential } = inputState

	if(credential != retypedCredential) {
        // 비밀번호 불일치 에러
		alert("비밀번호가 불일치 합니다.")
        return;

	}
    if(credential.length < 8) {
        alert("비밀번호는 최소 8자 이상이어야 합니다.")
        return;
    }

    if(!Validator.isValidPassword(credential)) {
        // 비밀번호 요건 에러
	    alert("유효하지 않은 비밀번호입니다. 요건을 확인해주세요")
	    return;
    }

	const dtoForCreate = new CreateUserDTO(username, principal, credential)
	const result = await store.authService.register(dtoForCreate);

    if(result.isPresent){
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