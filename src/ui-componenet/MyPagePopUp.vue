<template>
    <div class="popup-container">
        <div class="section pointer">
            <router-link to="/mypage">
                <div class="button">
                    <div class="menu-name">My page</div>
                </div>
            </router-link>
        </div>

        <div class="section pointer">
            <div class="button" @click="handleLogout">
                <div class="signout-section">
                    <div class="menu-name">Sign out</div>
                </div>
            </div>

        </div>
        <p class="text-align-center principal-container">
            {{principal}}
        </p>

    </div>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";
import {useAuthStore} from "@/store/AuthStore";

const authStore = ref(useAuthStore().authService)

const principal = computed( () => {
    return authStore.value.data.principal
})

function handleLogout() {
    authStore.value.logout()
}


</script>

<style scoped lang="scss">
@use "@style/color" as color;

.popup-container {
    z-index: 10;
    position: absolute;

}

.section {
    padding: 18px 0;
    border-bottom: 1px solid rgb(230, 230, 230);
    display: block;


}

.button {
    &:hover {
        background-color: color.$gray-50;
    }
}

.menu-name {
    margin-left: 16px;
    display: block;
    font-size: 1.2rem;
    padding: 0 1rem;
}

.logout-section {
    display: flex;
    flex-direction: column;
    text-align: left;
}

p {
    font-size: 1.2rem;
    padding: 1rem;
}
</style>