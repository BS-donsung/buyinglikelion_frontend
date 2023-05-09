<template>
	<div
			v-if="!authData.isAuthentication || isEmptyOfWishList"
			class="empty-banner"
	>
		<EmptyWishList />
	</div>
	<section v-else>
		<h1 class="wishtitle" >
			{{ authData.username }}의 Wish List
		</h1>
		<WishListContainer />
	</section>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/AuthStore";
import {computed, onMounted, ref} from "vue";
import {useWishListStore} from "@/store/WishListStore";
import {ButtonInTabInterface} from "@/components/tab/ButtonTab.vue";
import WishListContainer from "@/container/wishitem/WishListContainer.vue";
import EmptyWishList from "@/ui-componenet/banner/EmptyWishListBanner.vue";
import {MessageAction} from "@/util/ModalMessage";
import {useRouter} from "vue-router";
import {useModalServiceStore} from "@/store/ui/UiModalService";


const authService = ref(useAuthStore().authService);
const wishListService = useWishListStore().wishService;

const isEmptyOfWishList = computed(() => {
    return wishListService.length == 0;
})
const authData = computed(() => {
    return authService.value.data
})

const router = useRouter()
const modalService = ref(useModalServiceStore().service);
onMounted(() => {
    if(!authService.value.isAuthenticated) {
        // 로그인 안내창
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
})

</script>

<style scoped lang="scss">
.empty-banner {
	margin: 4rem;
}
</style>