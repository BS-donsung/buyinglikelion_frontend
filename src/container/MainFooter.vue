<template>
	<footer class="main-footer position-fixed">
		<ul class="flex-container space-around main-footer-list">
			<li>
				<router-link to="/">
					<v-btn icon size="large" variant="plain">
						<span class="material-symbols-outlined">book</span>
					</v-btn>
				</router-link>
			</li>
			<li>
				<router-link to="/accountbook">
					<v-btn icon size="large" variant="plain">
						<span class="material-symbols-outlined">account_balance_wallet</span>
					</v-btn>
				</router-link>
			</li>
			<li>
				<router-link to="/shopping">
					<v-btn icon size="large" variant="plain">
						<span class="material-symbols-outlined">shopping_cart</span>
					</v-btn>
				</router-link>
			</li>
			<li>
				<router-link to="/mypage">
					<v-btn icon size="large" variant="plain">
						<span class="material-symbols-outlined">menu</span>
					</v-btn>
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<style scoped lang="scss">
@use "@style/color" as color;
@use "@style/zindex" as zindex;


footer {
    z-index: zindex.$z-index-middle;
}


.main-footer {
    background-color: color.$color-main;
     bottom: 0;

	  &-list {

       & a {
	       color: black;
	       text-decoration: none;
	       font-size: 2rem;
       }
  }
}

</style>
<script setup lang="ts">
</script>