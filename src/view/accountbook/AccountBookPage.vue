<template>
    AccountBook
</template>

<script setup lang="ts">
interface AccountBookRouteProps {
    id? : string
}
const props = defineProps<AccountBookRouteProps>()
console.log(props.id)
</script>