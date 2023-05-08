<template>

	<div class="flex-container center column-direct form-container">
		<h1>Regster</h1>
		<RegisterForm :on-summit="handleRegister"/>
	</div>
</template>
<script setup lang="ts">

import RegisterForm from "@/components/RegisterForm.vue";
import {CreateUserDTO} from "@/dto/UserDTO";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/store/AuthStore";
import {useSnackbarService} from "@/store/ui/UISnackbarService";

const router = useRouter()
const authService = useAuthStore().authService;
const snackbarService = useSnackbarService().service
async function handleRegister( dto : CreateUserDTO) {
    // validation
    const result = await authService.register(dto);

    if(result.isPresent){
        snackbarService.activate({ positive : false,  message : (result.get()?.message ?? "에러가 발생했습니다.") } );
        return;
    } else {
        // success processing
        snackbarService.activate({ message : "가입 성공" } );
        await router.push("/");
    }
}
</script>

<style scoped lang="scss">
.form-container {
    height: calc(100vh - 64px);
}
h1 {
    margin-bottom: 2rem;
}
</style>