<template>
	<div class="image-component" :style="{'background-image': `url(${props.item.image})`}">
		<div class="hover-menu flex-container">
			<MainColorButton
					value="찜" active
					:on-click="handleRegisterWishItem"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">

import {RegisteredProductDTO} from "@/dto/RegisteredProductDTO";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import {ref} from "vue";
import {useAuthStore} from "@/store/AuthStore";
import {useModalServiceStore} from "@/store/ui/UiModalService";
import {useSnackbarService} from "@/store/ui/UISnackbarService";
import {MessageAction} from "@/util/ModalMessage";
import {useRouter} from "vue-router";

interface ImageComponentProps {
    item : RegisteredProductDTO
}

const props = defineProps<ImageComponentProps>()

const router = useRouter()

const authService = ref(useAuthStore().authService)
const modalService = ref(useModalServiceStore().service);
const snackbarService = ref(useSnackbarService().service);

function handleRegisterWishItem() {

    if(authService.value.isAuthenticated) {
        snackbarService.value.activate({
            message : "등록이 완료되었습니다"
        })
    } else {
        const posAction : MessageAction = {
            text : "로그인",
	        action : () => {
                router.push("/auth/login")
	        }
        }
        const negAction : MessageAction = {
            text : "회원가입",
            action : () => {
                router.push("/auth/register")
            }
        }

        modalService.value.activate({
            header : "로그인이 필요한 기능",
	        contents : "가입 창으로 안내해드릴까요?",
	        positive_action : posAction,
	        negative_action : negAction
        }, 10000)
    }
}


</script>


<style scoped lang="scss">
@use "@style/color" as color;

.image-component {
    width: 16rem;
    height: 16rem;
    background-color: color.$gray-100;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.hover-menu {
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 0.3s ease;
	justify-content: center;
	align-items: center;

	&:hover {
        opacity: 1;
		background-color: rgba(color.$color-main, 0.5);
	}

}
</style>