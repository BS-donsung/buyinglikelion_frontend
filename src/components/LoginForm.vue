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
				<v-progress-circular indeterminate
						v-if="props.status == STATUS.PENNDING" />
				<span class="font-weight-700" v-else>
					로그인
				</span>
			</v-btn>
			<v-btn type="submit" color="#A3353E" to="/auth/register">
				<span class="font-white font-weight-700">가입하기</span>
			</v-btn>
		</div>
	</form>
</template>

<script setup lang="ts">
import Checkbox from "@/ui-componenet/Checkbox.vue";
import {reactive} from "vue";
import {AuthDTO} from "@/dto/UserDTO";
import {STATUS} from "@/util/ProcessState";

interface LoginFormProps {
    status : STATUS
    onSummit : ( AuthDTO ) => Promise<void>
}

const props = defineProps<LoginFormProps>();

const inputState = reactive({
	principal : "",
	credential: "",
})
async function handleSubmit(){
    const dto = new AuthDTO(inputState.principal, inputState.credential)

	await props.onSummit(dto);
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