<template>
	<footer class="main-footer position-fixed">
		<ul class="flex-container main-footer-list">
			<li>
				<router-link to="/">
					HOME
				</router-link>
			</li>
			<li>
				<router-link to="/accountbook">
					AccountBook
				</router-link>
			</li>
			<li>
				<router-link to="/shopping">
					Shopping
				</router-link>
			</li>
			<li>
				<router-link to="/mypage">
					MyPage
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

    justify-content: space-between;

    & a {
      color: black;
      text-decoration: none;
    }
  }

}

</style>