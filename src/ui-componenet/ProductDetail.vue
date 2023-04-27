<template>
    <div class="productdetailview">
      <img class="productimg" src="@asset/componenticon/lionlogo1.png" alt="imgbox" />
      <div class="productname">{{ product }}</div>
      <div class="price">
        <span class="pricenumber">{{ lowest_price }}</span><span class="won">원</span>
      </div>
    </div>
 </template>

<script lang="ts">
export default {
  name: 'ProductDetail',
}
</script>

<script setup lang="ts">

import { defineProps } from 'vue';
  
interface ProductDetailProps {
  
  product: string,
  lowest_price: number,
  image_url?: string,
};

const props = withDefaults(defineProps<ProductDetailProps>(), {
    product: "제품명",
    lowest_price: 0,
  
});

</script>

<style scoped>

  .productdetailview {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    min-height: 427px;
    width: 347px;
  }

  .productimg {
    height: 345px;
    object-fit: contain;
    border-radius: 20px;
    width: 345px;
    background-color: gainsboro;
  }

  .productname {
    letter-spacing: 0;
    line-height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 19px;
    /* min-width: 197px; */
    position: relative;
    white-space: nowrap;
    font-size: 18px;
    font-weight: bold;
  }

  .price {
    align-self: flex-end;
    letter-spacing: 0;
    line-height: 26.8px;
    margin-right: 6px;
    margin-top: 16px;
    min-height: 27px;
    min-width: 104px;
    text-align: right;
    white-space: nowrap;
    font-size: 24px;
  }

  .pricenumber {
    font-weight: bold;
  }

</style>