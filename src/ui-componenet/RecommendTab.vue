<template>
	<div class="recommendtab">
		<div class="overlap-group">
			<h4 class="mention">{{ username }}사자님 아래 추천 아이템도 둘러보세요!</h4>

		</div>
	</div>
</template>


<script setup lang="ts">
import RecommendItem from './RecommendItem.vue';
import { defineProps } from 'vue';

interface RecommendItemProps {
    username?: string,
}

const props = withDefaults(defineProps<RecommendItemProps>(), {
    username: "Test",

});

</script>

<style scoped>

@media screen and (min-width: 1px) {
    .recommendtab {
        display: flex;
    }

    .overlap-group {
        align-items: flex-start;
        border-radius: 15px 15px 0px 0px;
        box-shadow: 0px -2px 2px #a58c6d4c;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: -2px;
        height: 100%;
        padding: 12px 17px;
        width: 100%;
    }
}

.recommend-item-list {
	display: flex;
	white-space: nowrap;
}




</style>