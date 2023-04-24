<template>
	<header>
		<div>
			<div>
				Logo
			</div>
			<div class="margin-left-auto">
				<ul>
					<li>Search</li>
					<li>Noti</li>
					<li>UserFace</li>
				</ul>
			</div>
		</div>
		<div class="additional-header">
			<input type="text" name="" id="">
			<button>image</button>
		</div>
	</header>

</template>

<script setup lang="ts">
// make store to use any way



const redirectionToSearchComponent = ( queryString : string ) => {
    this.$router.push({ path : "/search", query : { url : queryString } })
}
</script>

<style scoped>

</style>

<!--
	어느정도 스크롤하면 additonal search area 숨기기
-->