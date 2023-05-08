<template>
    <div>
        <div v-if="!isSuccessQuery">
            <PendingComponent :guide-message="`${props.query} 데이터를 찾는 중입니다.`"/>
        </div>
        <div v-else-if="isEmptyData">
            <PendingComponent :guide-message="`${props.query} 데이터를 찾는 중입니다.`"/>
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

const queryRequest = async () => {
    await queryService.value.getQuery(query);
}

onMounted( queryRequest )
watch(
    () => props.query,
    () => queryRequest()
)

const isSuccessQuery = computed( () => {
    return queryService.value.isSuccess
})
const queryData = computed( () => queryService.value.data)
const isEmptyData = computed( () => queryService.value.data.length == 0)


</script>

<style scoped>

</style>