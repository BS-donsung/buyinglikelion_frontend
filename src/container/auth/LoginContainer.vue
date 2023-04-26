<template>
	<HeaderMarginSpacer />
	<div class="flex-container center login-container">
		<div class="flex-item">
			<LoginForm />
		</div>
	</div>
</template>
<script setup lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import HeaderMarginSpacer from "@/ui-componenet/HeaderMarginSpacer.vue";
</script>
