<template>
  <div class="user-web_com">
    <div class="overlap-group">
      <div class="rec_1"></div>
      <div class="rec_2"></div>
      <img class="userprofile" src="@/img/sajaface.png" alt="userprofile" />
      <h1 class="username">{{ username }} 사자님</h1>
      <div class="wishitem">찜한 아이템</div>
      <div class="wishN">{{ wishN }}</div>
      <div class="buyN">{{ buyN }}</div>
      <div class="buyitem">구매한 아이템</div>
      <a :href="editurl"><img class="editic" src="@/img/editic.svg" alt="icon-settings" /></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserWebCom',
}
</script>

<script setup lang="ts">

import { defineProps } from 'vue';

  const props = defineProps({
    userprofile: String,
    username: String,
    wishN: Number,
    buyN: Number,
    editurl: String,
  });

</script>


<style>
  .user-web_com {
    align-items: flex-start;
    display: flex;
    min-width: 320px;
    max-width: 320px;
  }

  .overlap-group {
    height: 260px;
    position: relative;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rec_1 {
    background-color: rgba(165, 140, 109, 0.3);
    border-radius: 0px 0px 10px 10px;
    height: 160px;
    left: 0;
    position: absolute;
    top: 100px;
    width: 320px;
  }

  .rec_2 {
    background-color: rgba(165, 140, 109, 0.05);
    border-radius: 10px 10px 0px 0px;
    height: 100px;
    left: 0;
    position: absolute;
    top: 0;
    width: 320px;
  }

  .userprofile {
    height: 100px;
    object-fit: cover;
    position: absolute;
    top: 32px;
    width: 100px;
  }

  .username {
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 132px;
    font-size: 24px;
  }

  .wishitem {
    position: absolute;
    top: 192px;
    left: 52px;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
  }

  .wishN {
    left: 84px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 220px;
    white-space: nowrap;
  }

  .buyN {
    right: 84px;
    letter-spacing: 0;
    line-height: 22px;
    position: absolute;
    top: 220px;
    white-space: nowrap;
  }

  .buyitem {
    position: absolute;
    top: 192px;
    right: 52px;
    letter-spacing: 0;
    line-height: 22px;
    white-space: nowrap;
  }

  .editic {
    height: 19px;
    left: 257px;
    position: absolute;
    top: 156px;
    width: 19px;
  }
</style>

<style scoped>

</style>