<template>
    <div class="flex-container column-direct">
        <label id="principal">
            Email
            <input type="email" />
        </label>
        <label id="credential">
            Password
            <input type="password" />
        </label>
        <button>로그인</button>
        <router-link to="/auth/register">
            <button>회원가입</button>
        </router-link>
    </div>
</template>