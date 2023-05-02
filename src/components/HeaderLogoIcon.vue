<template>
	<div class="flex-container">
		<span class="material-symbols-outlined pointer" @click="status.toggle">
			menu
		</span>
		<router-link to="/" class="flex-container inline header-logo-container pointer" @click="handleCloseSideBar">
			<img src="@asset/logo.svg" class="icon"/>
			<img src="@asset/logo-text-single-line.svg" class="text-logo"/>
		</router-link>
	</div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {useSidebarStore} from "@/store/ui/UISidebarStore";

const status = ref(useSidebarStore().status)

function handleCloseSideBar() {
    status.value.set(false)
}


</script>


<style scoped lang="scss">
@use "@style/widthbreakpoint" as breakpoint;

.flex-container {
	align-items: center;
	gap: 1.5rem;
}

img.icon {
    height: 5rem;
    width: 5rem;
    max-height: 5rem;
}
.text-logo {
	height: 2.5rem;
}


.header-logo-container {
    & > *:last-child {
        @media(max-width: breakpoint.$WIDTH_BREAK_POINT_MOBILE_TABLE) {
            & {
                display: none;
            }
        }
    }
}
</style>
