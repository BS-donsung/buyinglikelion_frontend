<template>
	<div class="main-sidebar vertical-section-divider-right" v-if="state.active">
		<router-link
				v-if="authDate.isAuthentication"
				to="/mypage">
			<div
					class="user-info-container flex-container column-direct vertical-section-divider-bottom">
				<div class="user-info-photo-container">
					<div class="user-info-photo-area"></div>
				</div>
				<div>
					{{authDate.username}}
				</div>
				<div class="flex-container column-direct user-info-data">
					<div class="flex-container user-info-n">
						<div>찜</div>
						<div>5</div>
					</div>
					<div class="flex-container user-info-n">
						<div>구매</div>
						<div>15</div>
					</div>
				</div>
			</div>
		</router-link>
		<div
				v-else
				class="spacer-of-top"
		/>
		<ul class="flex-container column-direct">
			<IconLabelComponent icon-value="account_balance_wallet" value="구매한 제품 입력하기" to="/accountbook"/>
			<IconLabelComponent icon-value="history" value="History" />

		</ul>
		<ul class="flex-container column-direct vertical-section-divider">
			<IconLabelComponent icon-value="home" value="Home" to="/" @click="handleClose"/>
			<IconLabelComponent icon-value="bookmark" value="WishList" to="/wishlist" @click="handleClose"/>
			<IconLabelComponent icon-value="account_balance_wallet" value="AccountBook" to="/accountbook" @click="handleClose"/>
		</ul>
		<ul class="flex-container column-direct vertical-section-divider">
			<IconLabelComponent icon-value="shopping_bag" value="Shopping" to="/shopping" @click="handleClose"/>
		</ul>
	</div>
</template>

<script setup lang="ts">
import IconLabelComponent from "@/ui-componenet/button/IconLabelComponent.vue";
import {useSidebarStore} from "@/store/ui/UISidebarStore";
import {useAuthStore} from "@/store/AuthStore";
import {computed} from "vue";

const state = useSidebarStore().status;
const authService = useAuthStore().authService;

const authDate = computed(() => {
    return authService.data
})

function handleClose() {
    state.set(false);
}

</script>

<style scoped lang="scss">
@use "@style/color" as color;
@use "@style/mixin" as mixin;
@import "@/style/divider.scss";



.spacer-of-top {
	height: 3rem;
}

.user-info-container {
    align-items: center;
}
.user-info-photo-container {
    // justify-content: center;
}
.user-info-photo-area {
    width : 9rem;
    height: 9rem;
    @include mixin.user-pic;
}

.user-info-data {
    justify-content: center;
    align-content: center;

    & > .user-info-n {
        align-items: center;
    }
}


.main-sidebar {
    position: fixed;
    height: calc(100vh - 64px);
    bottom: 0;
    left: 0;
    font-weight: 300;

    display: inline-flex;
    flex-direction: column;

    background-color: color.$color-main;
    z-index: 6;

    color: color.$gray-900;

    transform: translateY(1px);
}

ul {
	font-weight: 700;
	color: color.$gray-800;
	& > * {
		padding: 0.5rem 3rem;
		border-radius: 1.2rem;

		&:active, &:hover {
			background-color: rgba(color.$gray-50, 0.3);
		}

	}
}
</style>