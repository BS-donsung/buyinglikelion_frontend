<template>
    <div class="flex-container column-direct">
        <label id="principal">
            Email
        </label>
        <input type="email" />
        <label id="credential">
            Password
        </label>
        <input type="password" />
        <button>로그인</button>
        <router-link to="/auth/register">
            <button>회원가입</button>
        </router-link>
    </div>
</template>
<script setup lang="ts">
</script>