<template>
  <div class="container-center-horizontal">
    <div class="searchform screen">
      <div class="overlap-group">
        <input class="inputbox" type="text" placeholder="검색어를 입력해 주세요." />
        <img class="searchic" src="@asset/icon/search.svg" alt="searchic" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SearchForm',
}
</script>

<script setup lang="ts">

</script>

<style scoped>
.searchform {
  align-items: flex-start;
  background-color: white;
  border: 1px none;
  display: flex;
  height: 120px;
  padding: 0 41px;
  width: 640px;
}

.overlap-group {
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-color: black;
  display: flex;
  gap: 237px;
  height: 50px;
  margin-top: 35px;
  min-width: 557px;
  padding: 4px 0;
}

.inputbox {
  align-self: flex-end;
  font-family: var(--font-family-noto_sans);
  font-size: 28px;
  line-height: normal;
  min-height: 38px;
  min-width: 280px;
  border: none;
}

.inputbox:focus {
  outline: none;
  box-shadow: none;
  border: none;
}

.searchic {
  height: 29px;
  margin-top: 6px;
  width: 29px
}
</style>