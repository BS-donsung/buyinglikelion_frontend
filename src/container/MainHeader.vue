<template>
	<header class="main-header-container position-fixed">
		<v-toolbar color="#F7CE46">
			<v-toolbar-title>
				<HeaderLogoIcon />
			</v-toolbar-title>
			<ul class="flex-container right-controller">
				<li>
					<v-btn icon size="large" :onclick="toggleHeaderExtended" variant="plain">
						<span class="material-symbols-outlined icon-size">search</span>
					</v-btn>
				</li>
				<li>
					<v-btn icon size="large" variant="plain">
						<span class="material-symbols-outlined icon-size">notifications</span>
					</v-btn>
				</li>
				<li v-if="isAuthenticated">
					<div class="profile-pic" @click="toggleMyPageExtended">
						<MyPagePopUp v-if="state.mypageExtended"/>
					</div>
				</li>
				<li v-if="!isAuthenticated">
					<router-link to="/auth/login" class="non-icon">
						<v-btn variant="tonal">
							로그인
						</v-btn>
					</router-link>
				</li>
				<li v-if="!isAuthenticated">
					<router-link to="/auth/register" class="non-icon">
						<v-btn variant="tonal">
							시작하기
						</v-btn>
					</router-link>
				</li>
			</ul>
			<template v-slot:extension v-if="state.headerExtended">
				<v-text-field
					label="찾을 태그나 URL을 입력하세요"
					hide-details="auto"
					class="search-input-field"
					v-model="inputState.inputData">
					<template v-slot:prepend-inner>
						<span class="material-symbols-outlined icon-size">search</span>
					</template>
					<template v-slot:append-inner>
						<span class="material-symbols-outlined pointer" @click="clearInputData">
							cancel
						</span>
					</template>
				</v-text-field>
				<v-btn size="large" :onclick="handleSearchInput">
					찾기
				</v-btn>
			</template>
		</v-toolbar>
	</header>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/AuthStore";
import {computed, reactive} from "vue";
import Validator from "@/util/Validator";
import {useRouter} from "vue-router";
import HeaderLogoIcon from "@/components/HeaderLogoIcon.vue";
import MyPagePopUp from "@/ui-componenet/MyPagePopUp.vue";

const router = useRouter()
const authStore = useAuthStore();
const isAuthenticated = computed( () => (authStore.authService.isAuthenticated) );

const state = reactive({
	headerExtended : false,
	mypageExtended : false
})

const inputState = reactive({
	inputData : ""
})
const clearInputData = () => { inputState.inputData = "" }

function handleSearchInput() {
    const inputData = inputState.inputData
    router.push(`/search?q=${inputData}`)
	state.headerExtended = false;
}

function toggleHeaderExtended() {
    state.headerExtended = !state.headerExtended
}

function toggleMyPageExtended() {
    state.mypageExtended = !state.mypageExtended
}

</script>

<style scoped lang="scss">
	@use "@style/color" as color;
	@use "@style/zindex" as zindex;
	@use "@style/mixin" as mixin;

	.main-header-container {
	    z-index: zindex.$z-index-middle;
		border-bottom: 1px solid black;
		& > .main-header {
			background-color: color.$color-main;
		}

	}
	.icon-size {
		font-weight: 700;
		font-size: 3rem;
	}

    .profile-pic {
        width: 3.5rem;
        height: 3.5rem;
	    margin: 0 1rem;
	    position: relative;
        @include mixin.user-pic;

	    & > * {
		    border-radius: 1.5rem;
		    background-color: color.$gray-100;
            z-index: 1000;
            /* position: absolute; */
            position: fixed;
            right: 16px;
		    top: 54px;
	    }
    }
    ul.flex-container .non-icon {
	    margin-right : 1rem;
    }

    .search-input-field {
	    background-color: white;
    }

    .right-controller {
	    margin-right: 16px;
    }
</style>
