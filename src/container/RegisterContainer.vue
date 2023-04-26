<template>
    <form @submit.prevent="handleSubmit">
        <v-text-field
            :counter="10"
            label="Username"
        ></v-text-field>
        <v-text-field
            :counter="10"
            label="E-mail"
        ></v-text-field>
        <v-text-field
            type="password"
            :counter="10"
            label="Passoword"
        ></v-text-field>
        <v-text-field
            type="password"
            :counter="10"
            label="Re-Passoword"
        ></v-text-field>
        <v-btn type="submit" to="/auth/register" block class="mt-2">Join Us</v-btn>
    </form>
</template>

<script setup lang="ts">

import { ref } from "vue";

const inputOfPrincipal = ref<HTMLInputElement | null>(null)
const inputOfCredential = ref<HTMLInputElement | null>(null)

function handleSubmit(){
    console.log("input0", inputOfPrincipal.value?.value)
    console.log("input1", inputOfCredential.value?.value)
}

</script>

<style scoped>

</style>