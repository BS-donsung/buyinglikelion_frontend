<template>
    <div class="recommendtab">
      <div class="overlap-group">
        <p class="mention">{{ username }}사자님 아래 추천 아이템도 둘러보세요!</p>
        <div class="flex-row">
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
          <RecommendItem />
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
export default {
    name: "RecommendTab",
    components: { RecommendItem }
}
</script>

<script setup lang="ts">
import RecommendItem from './RecommendItem.vue';
import { defineProps } from 'vue';
  
interface RecommendItemProps {
  username: string,
};

const props = withDefaults(defineProps<RecommendItemProps>(), {
  username: "Test",
  
});

</script>

<style scoped>

  @media screen and (min-width: 1px) {
    .recommendtab {
      width: 100%;
      align-items: flex-end;
      display: flex;
      height: 300px;
      overflow: hidden;
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

  .mention {
    letter-spacing: 0;
    line-height: 17.9px;
    min-height: 18px;
    white-space: nowrap;
    font-size: 18px;
    font-weight: bold;
  }

  .flex-row {
    align-items: flex-start;
    display: flex;
    gap: 22px;
    height: 157px;
    margin-right: 1px;
    width: 90%;
    position: relative;
    justify-content: space-between;
  }

  }
  

  
  
</style>