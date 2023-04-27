<template>
    <h1 class="wishtitle">{{ currentUserName }}의 Wish List</h1>

    <div v-if="store.size === 0">
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
    <section v-else>
        <div class="flex-container select-panel">
            <Checkbox title="전체 상품 선택하기" />
            <v-btn variant="tonal" class="">
                선택 상품 삭제
            </v-btn>
        </div>
        <div v-for="(item, index) in store" :key="index">
            <ItemCom
                :date="item.choice_date.toDateString()"
                :name="item.name"
                :image="item.image_url"
                :wish_price="item.lowest_price.toString()"
                :onremove="handlingRemove"
                :index="item.id" />
        </div>
    </section>
</template>

<script setup lang="ts">

import ItemCom from '@/ui-componenet/ItemCom.vue';
import {useAuthStore} from "@/store/AuthStore";
import { dummyWishList } from "@/dummy/DummyWishList";

import {DistinctSet} from "@/util/DistinctSet";
import {WishItemDTO} from "@/dto/ProductDTO";
import {computed, reactive} from "vue";
import Checkbox from "@/ui-componenet/Checkbox.vue";


const authStore = useAuthStore();
const currentUserName = authStore.authService.getData().username

const state = reactive({
    store : new DistinctSet(( wishItem : WishItemDTO ) => wishItem.id )
})


const store = computed(() => state.store);

dummyWishList.forEach( item => {
    state.store.add(item);
})

function handlingRemove( index : number ) {
    state.store.deleteByBase(index);
}

</script>

<style scoped lang="scss">
@use "@style/color" as color;
//@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,700")


.select-panel {
    margin: 1rem 0;
    & > *:last-child {
        margin-left: auto;
    }
}


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