<template>
    <div>
        <div v-if="!isSuccessQuery">
            <PendingComponent :guide-message="`${props.query} 데이터를 찾는 중입니다.`"/>
        </div>
        <div v-else-if="isEmptyData">
            <p>가져올 수 없는 데이터입니다.</p>
        </div>
        <div v-else>
            <ItemComponent
                v-for="(data, index) in queryData" :key="index"
                :product="data"
            />
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

interface ProductListContainerProps {
    query: string;
}

const props = defineProps<ProductListContainerProps>();

const query = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("tags", props.query)
const queryService = ref(new GetQueryMultipleDataService<ProductWithURLDTO>());


onMounted( () => queryService.value.getQuery(query) )
watch(
    () => props.query,
    ( val, prev) => {
        console.log("p", props.query)
        console.log("val", val)
        console.log("prev", prev)
        const query = ENDPOINT_OF_SEARCHING_PRODUCT_INFO.appendQuery("tags", props.query)
        queryService.value.getQuery(query)
    }
)

const isSuccessQuery = computed( () => {
    return queryService.value.isSuccess
})
const queryData = computed( () => queryService.value.data)
const isEmptyData = computed( () => queryService.value.data.length == 0)


</script>

<style scoped>

</style>