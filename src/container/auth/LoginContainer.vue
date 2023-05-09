<template>
	<div class="flex-container center column-direct form-container">
		<h1>
			Login
		</h1>
		<LoginForm :on-summit="handleLogin" :status="processStatus" />
	</div>

</template>

<script setup lang="ts">

import {useAuthStore} from "@/store/AuthStore";
import {useRouter} from "vue-router";
import {useSnackbarService} from "@/store/ui/UISnackbarService";
import {AuthDTO} from "@/dto/UserDTO";
import {computed} from "vue";
import LoginForm from "@/components/LoginForm.vue";

const router = useRouter()
const authService = useAuthStore().authService
const snackBarService = useSnackbarService().service

const processStatus = computed( () => {
    return authService.getProcessing()
})
async function handleLogin( dto : AuthDTO ) : Promise<void> {
    if(authService.isPending) {
        return;
    }
    const result = await authService.login(dto)
    if(result.isPresent) {
        snackBarService.activate({ positive : false, message : result.get().message})
    } else {
        snackBarService.activate({ positive : true, message : "성공"})
        await router.push("/")
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