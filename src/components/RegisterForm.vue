<template>

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
				append-inner-icon="mdi-email"
				v-model="inputState.principal">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">mail</span>
			</template>
		</v-text-field>
		<v-text-field
				type="password"
				:counter="12"
				label="Passoword"
				variant="outlined"
				v-model="inputState.credential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<v-text-field
				type="password"
				:counter="12"
				label="Checking Passoword"
				variant="outlined"
				v-model="inputState.retypedCredential">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">lock</span>
			</template>
		</v-text-field>
		<v-text-field
				:counter="8"
				label="Birth"
				variant="outlined"
				placeholder="19YYMMDD"
				v-model="inputState.birth">
			<template v-slot:prepend-inner>
				<span class="material-symbols-outlined">cake</span>
			</template>
		</v-text-field>
		<div class="confirm-area flex-container">
			<MainColorButton value="가입하기" @click="handleSummit"/>
			<router-link to="/auth/login">
				<DefaultButton value="로그인"/>
			</router-link>
		</div>
	</form>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import { useRouter } from "vue-router"

import { CreateUserDTO } from "@/dto/UserDTO";
import {useAuthStore} from "@/store/AuthStore";
import Validator from "@/util/Validator";
import DefaultButton from "@/ui-componenet/button/DefaultButton.vue";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {useSnackbarService} from "@/store/ui/UISnackbarService";
import RegisterForm from "@/components/RegisterForm.vue";

interface RegisterFormProps {
    onSummit : (dto : CreateUserDTO ) => void
}

const props = defineProps<RegisterFormProps>();
const snackbarService = useSnackbarService().service

const inputState = reactive({
	username  : "",
    principal : "",
    credential: "",
	retypedCredential : "",
	birth : ""
})

async function handleSummit() {
    // validation
    const { username, principal, credential, retypedCredential, birth } = inputState

    if(!Validator.isValidBirth(birth)) {
        snackbarService.activate({ positive : false, message : "생년월일 양식을 확인해주세요." } );
        return;
    }
	if(credential !== retypedCredential) {
        snackbarService.activate({ positive : false, message : "재확인 비밀번호가 다릅니다. 확인해주세요" } );
        return;
	}

    if(credential.length < 8) {
        snackbarService.activate({ positive : false,  message : "비밀번호는 최소 8자 이상이어야 합니다." } );
        return;
    }

    if(!Validator.isValidPassword(credential)) {
        // 비밀번호 요건 에러
        snackbarService.activate({ positive : false,  message : "유효하지 않은 비밀번호입니다. 요건을 확인해주세요" } );
        return;
    }
	props.onSummit(new CreateUserDTO(username, principal, credential))

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
	& > * {
        margin: 0.5rem 0;
	}
}
</style>