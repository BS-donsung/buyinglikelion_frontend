<template>
    <div class="foryoucom-container">
        <h1 class="title">{{ title }}&nbsp;&nbsp;&gt;</h1>
        <div class="img-container">
          <div class="bichevron-container-l">
            <img class="bichevron-left" src="@/asset/componenticon/bi_chevron-left.svg" alt="bi:chevron-left" @click="prev" />
          </div>
            <div class="carousel" :style="carouselStyle">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="carousel-item"
                >
                {{ item }}
              </div>

            </div>
            <div class="bichevron">
              <img class="bichevron-right" src="@/asset/componenticon/bi_chevron-right.svg" alt="bi:chevron-left" @click="next" />
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
export default {
  name: 'ShoppingCom',
}
</script>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
export interface ShoppingComProps {
    title : string,
    
}

const props = defineProps<ShoppingComProps>();

const currentIndex = ref(0);
const items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let autoSlideInterval: ReturnType<typeof setTimeout> | null = null;

const carouselStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 176}px)`,
  transition: 'transform 0.3s ease',
}));



const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = items.length - 1;
  }
};

const next = () => {
  if (currentIndex.value < items.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

// onMounted(() => {
//   autoSlideInterval = setInterval(() => {
//     next();
//   }, 3000);
// });


// onBeforeUnmount(() => {
//   if (autoSlideInterval !== null) {
//     clearInterval(autoSlideInterval);
//   }
// });
</script>


<style scoped>

    .foryoucom-container {
        align-items: flex-start;
        background-color: white;
        border: 1px none;
        display: flex;
        flex-direction: column;
        gap: 24px;
        height: 358px;
        padding: 20px 0 20px 20px;
        width: 75vw;
        overflow-x: hidden;
    }
    .title {
        padding-left: 5px;
        font-size: 24px;
        font-weight: bold;
        white-space: nowrap;
    }

    .img-container {
    align-items: flex-end;
    background-color: rgba(213, 193, 173, 0.3);
    border-radius: 10px 0px 0px 10px;
    display: flex;
    height: 216px;
    justify-content: flex-end;
    overflow-x: hidden;
    flex-wrap: nowrap;
    padding: 19px 0;
    width: 100%;

    position: relative;
    
  }

  .carousel {
    display: flex;
    transition: transform 0.3s ease;
  }

  .carousel-item {
    flex-shrink: 0;
    box-sizing: border-box;
    text-align: center;
    background-color: gainsboro;
    margin-left: 24px;
    height: 176px;
    width: 176px;
  }

 

  .bichevron-left {
    align-self: center;
    height: 24px;
    margin-top: 2px;
    margin-left: 5px;
    width: 24px;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 5;
    transform: translateY(-50%);

  }

  

  .bichevron-right {
    align-self: center;
    height: 24px;
    margin-top: 2px;
    margin-left: 12px;
    width: 24px;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 5;
    transform: translateY(-50%);

  }

</style>