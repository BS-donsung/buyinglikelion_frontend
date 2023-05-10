<template>
    <div>
        <div v-if="!isSuccessQuery">
            <PendingComponent :guide-message="`${props.query} 데이터를 찾는 중입니다.`"/>
        </div>
        <div v-else-if="isEmptyData">
            <p>가져올 수 없는 데이터입니다.</p>
        </div>
        <div v-else class="grid-container-right-400px divider">
            <div>
                <h2>검색 결과</h2>
                <ItemComponent
                    v-for="(data, index) in queryData" :key="index"
                    :product="data"
                />
            </div>
            <div class="tag-container">
                <h2>연관 태그</h2>
                <MainColorButton
                    v-for="(data, index) in relatedTag"
                    :value="data"
                    :to="`/search/product?query=${data}`"
                    :key="index"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ItemComponent from '@/ui-componenet/ItemComponent.vue';
import {computed, defineProps, onMounted, onUpdated, ref, watch, watchEffect} from "vue";
import {ItemViewProps} from '@/ui-componenet/WishItemComponent.vue';
import {GetQueryMultipleDataService} from "@/service/AsyncGetQueryService";
import {ENDPOINT_OF_SEARCHING_PRODUCT_INFO} from "@/requestinfo/CrawlingRequestInfo";
import PendingComponent from "@/ui-componenet/PenddingComponent.vue"
import {ProductDTO, ProductWithURLDTO} from "@/dto/RegisteredProductDTO";
import {STATUS} from "@/util/ProcessState";
import MainColorButton from "@/ui-componenet/button/MainColorButton.vue";
import DefaultButton from "@/ui-componenet/button/DefaultButton.vue";
import {findTopFrequentWords, splitWords} from "@/util/WordUtil";

interface ProductListContainerProps {
    query: string;
}

const props = defineProps<ProductListContainerProps>();

const query = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("tags", props.query)
const queryService = ref(new GetQueryMultipleDataService<ProductWithURLDTO>());


onMounted( () => queryService.value.getQuery(query) )
watch(
    () => props.query,
    ( val, prev ) => {
        const query = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("tags", props.query)
        queryService.value.getQuery(query)
    }
)

const isSuccessQuery = computed( () => {
    return queryService.value.isSuccess
})
const queryData = computed( () => queryService.value.data)
const isEmptyData = computed( () => queryService.value.data.length == 0)

const relatedTag = computed(() => {
    const productNameList = queryService.value.data.map( data => data.product)
    const wordFromProductName = splitWords(productNameList)
    return findTopFrequentWords(wordFromProductName, 8).filter( word => word.length > 1)
})

</script>

<style scoped lang="scss">

h2 {
    margin-bottom: 1.5rem;
}

.tag-container {

    padding: 0 1.5rem;

    & > * {
        margin-right: 1.5rem;
    }
}
</style>