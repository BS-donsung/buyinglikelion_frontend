<template>
    <h1 class="wishtitle">{{ currentUserName }} 사자님의 Wish List</h1>
    <span class="material-symbols-outlined">
        expand_more
    </span>
    <span class="material-symbols-outlined">
    </span>
    radio_button_checked

    <div v-if="dummyWishList.length === 0">
        <div class="havenowish-container">
            <div class="havenowishscreen">
                <img class="sajaface" src="@/asset/componenticon/sajaface.png" alt="sajaface" />
                <div class="nowishtext">
                    <span class="span-jjim">찜한 상품</span><span class="notosans-bold-black-20px">이 없습니다.</span>
                </div>
                <p class="nowishinnertext notosans-normal-black-20px">사자님을 위한 For you 메뉴를 확인하여 관심상품을 추가해보세요!</p>
            </div>
        </div>
    </div>

    <div v-else v-for="(item, index) in dummyWishList" :key="item.id">
        <ItemCom
            wishDate="test"
            :wishItem="item.name"
            :wishItemUrl="item.image_url"
            :wishPrice="item.lowest_price.toString()"
            :index="index" />
    </div>
</template>

<script setup lang="ts">

import ItemCom from '@/ui-componenet/ItemCom.vue';
import {useAuthStore} from "@/store/AuthStore";
import { dummyWishList } from "@/dummy/DummyWishList";
import {onMounted} from "vue";

const authStore = useAuthStore();
const currentUserName = authStore.authService.data.username

onMounted(() => {
    console.log("date", dummyWishList[0].choice_date.toDateString())
})




</script>

<style scoped lang="scss">
@use "@style/color" as color;
//@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,700")


.wishtitle {
    letter-spacing: 0;
    line-height: normal;
    min-height: 33px;
    font-size: 24px;
}

.havenowish-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    width: 100%;

    & > * {
        flex-shrink: 0;
        pointer-events: auto;
    }
}

.havenowish {
    align-items: center;
    background-color: white;
    border: 1px none;
    display: flex;
    flex-direction: column;
    height: 440px;
    padding: 79px 144px;
    width: 832px;
}

.sajaface {
    height: 160px;
    margin-right: 20.0px;
    object-fit: cover;
    width: 160px;
}

.nowishtext {
    color: transparent;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-right: 19.0px;
    margin-top: 29px;
    min-height: 27px;
    min-width: 181px;
}

.span-jjim {
    color: color.$color-point
}


.nowishinnertext {
    align-self: flex-end;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 13px;
    min-height: 27px;
    min-width: 543px;
}
</style>