<template>
	<header class="position-fixed">
		<v-toolbar color="#F7CE46">
			<v-toolbar-title>

				<router-link to="/" class="flex-container inline header-logo-container">
					<img src="@asset/logo.svg" class="icon"/>
					<object type="image/svg+xml" data="/assets/logo-text-single-line.svg">Not support SVG</object>
				</router-link>
			</v-toolbar-title>

			<ul class="flex-container">
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
					<div class="profile-pic"></div>
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
					label="Main input"
					hide-details="auto"
					class="search-input-field">
					<template v-slot:prepend-inner>
						<span class="material-symbols-outlined icon-size">search</span>
					</template>
				</v-text-field>
				<v-btn size="large" :onclick="toggleHeaderExtended">
					찾기
				</v-btn>
			</template>
		</v-toolbar>

	</header>
</template>

<script setup lang="ts">
import {useAuthStore} from "@/store/AuthStore";
import {computed, reactive} from "vue";

const authStore = useAuthStore();
const isAuthenticated = computed( () => (authStore.authService.isAuthenticated) );

const state = reactive({
	headerExtended : false
})
function toggleHeaderExtended() {
    console.log("toggle");
    state.headerExtended = !state.headerExtended
}

</script>

<style scoped lang="scss">
	@use "@style/color" as color;
	@use "@style/zindex" as zindex;
	@use "@style/widthbreakpoint" as breakpoint;

	header {
	    z-index: zindex.$z-index-middle;
		& > .main-header {
			background-color: color.$color-main;
		}
	}
	img.icon {
	    height: 3.5rem;
	    width: 3.5rem;
	    max-height: 3.5rem;
	}
	.header-logo-container {
		& > *:last-child {
			margin-left: 1rem;
			height: 1.6rem;

			@media(max-width: breakpoint.$WIDTH_BREAK_POINT_MOBILE_TABLE) {
				& {
                    display: none;
				}
			}
		}
	}

    .profile-pic {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-image: url("/assets/default-user-icon.png");
	    background-repeat: no-repeat;
	    background-position: center center;
        background-size: cover;
	    background-color: #D5C1AD;
    }
    ul.flex-container .non-icon {
	    margin-right : 1rem;
    }

    .search-input-field {
	    background-color: white;
    }
</style>
