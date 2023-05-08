<template>
	<div class="recommendframe flex-container column-direct">
		<img class="productimg" src="@asset/componenticon/sajaface.png" alt="productimg" />
		<p class="itemname">{{ product }}</p>
		<div class="pricetab">
			<div class="text-2 text14px">최저</div>
			<div class="text-3 text14px">
				<span class="text14px_bold">{{ lowest_price }}</span><span class="text14px"> 원</span>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">

import { defineProps } from 'vue';

interface RecommendItemProps {
    product?: string,
    lowest_price?: number,
    image_url?: string,
};

const props = withDefaults(defineProps<RecommendItemProps>(), {
    product: "제품명제품명제품명제품명",
    lowest_price: 123456,
});

</script>


<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Roboto:400");

.recommendframe {
    min-height: 30rem;
    width: 20rem;
}

.productimg {
    height: 156px;
    object-fit: cover;
    width: 156px;
}

.itemname {
    margin-top: 12px;
    width: 156px;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.pricetab {
    align-items: center;
    display: flex;
    gap: 5px;
    margin-right: 8px;
    margin-top: 12px;
    position: relative;
    width: fit-content;
}

.text-2 {
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
}

.text-3 {
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
}

.text14px {
    color: black;
    font-size: 14px;
}

.text14px_bold {
    color: black;
    font-size: 14px;
    font-weight: bold;
}
</style>
  
  
  
  