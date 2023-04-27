  <template>
    <div class="container-center-horizontal">
      <div class="sangpumcomponent-web screen">
        <div class="checkbox"><input type="checkbox" id="checkbox" /></div>
        <img class="itemimage" :src="wishItemUrl" />
        <div class="flex-col">
          <div class="wishdate notosans-normal-chicago-12px">{{ wishDate }} </div>
          <div class="wishitem notosans-normal-black-18px">{{ wishItem }}</div>
          <div class="wishprice notosans-bold-black-16px">
            <span class="notosans-bold-black-16px">{{ wishPrice }}</span><span class="notosans-normal-black-16px">원</span>
          </div>
          <div class="flex-row">
            <img class="pricegapic" src="@/asset/componenticon/가격추이ic.svg" alt="pricegapic" />
            <div class="pricetrend notosans-normal-chicago-10px">가격 추이 보기</div>
            <img class="spreadic" src="@/asset/componenticon/spreadic.svg" alt="spreadic" />
          </div>
        </div>
        <img class="deletebtn" src="@/asset/componenticon/item_close.svg" alt="deletebtn" />
      </div>
    </div>
  </template>

  <script lang="ts">
    export default {
      name: "itemcom",
    };
  </script>

  <script setup lang="ts">

  import { defineProps } from 'vue';

    const props = defineProps({
      wishDate: String,
      wishItem: String,
      wishItemUrl: String,
      wishPrice: String,

    });

  </script>

  <style scoped>

  @import "@/style/componentreset.sass";

  .screen a {
    display: contents;
    text-decoration: none;
  }

  .container-center-horizontal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    width: 100%;
  }

  .container-center-horizontal > * {
    flex-shrink: 0;
    pointer-events: auto;
  }
  .sangpumcomponent-web {
      align-items: flex-start;
      background-color: var(--white);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-color: var(--akaroa);
      display: flex;
      overflow: hidden;
      width: 832px;
    }

    .checkbox {
      background-color: var(--white);
      height: 16px;
      margin-top: -1px;
      width: 16px;
    }

    .itemimage {
      background-color: var(--alto);
      height: 160px;
      margin-left: 24px;
      margin-top: -1px;
      width: 160px;
    }

    .flex-col {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: 33px;
      margin-top: 21px;
      min-height: 120px;
      width: 432px;
    }

    .wishdate {
      letter-spacing: 0;
      line-height: 14px;
      margin-left: 1px;
      white-space: nowrap;
    }

    .wishitem {
      letter-spacing: 0;
      line-height: 20px;
      margin-top: 12px;
      min-height: 19px;
      white-space: nowrap;
    }

    .wishprice {
      letter-spacing: 0;
      line-height: 18px;
      margin-left: 1px;
      margin-top: 7px;
      min-height: 18px;
      min-width: 70px;
      /* text-align: right; */
      white-space: nowrap;
    }

    .flex-row {
      align-items: center;
      display: flex;
      margin-left: 10px;
      margin-top: 38px;
      min-width: 108px;
    }

    .pricegapic {
      height: 12px;
      width: 20px;
    }

    .pricetrend {
      letter-spacing: 0;
      line-height: 11.2px;
      margin-bottom: 0.4px;
      margin-left: 11px;
      min-height: 11px;
      text-align: center;
      white-space: nowrap;
      width: 62px;
      font-size: 10px;
    }

    .spreadic {
      height: 8px;
      margin-left: 8px;
      /* margin-top: 1.6px; */
      width: 12px;
    }

    .deletebtn {
      height: 16px;
      margin-left: 147px;
      
      width: 16px;
    }
  </style>