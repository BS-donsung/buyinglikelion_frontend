<template>
    <div>
        
        <div v-for="(item, index) in store" :key="index">
			<ItemComponent
					:product="item"               />
		</div>
    </div>
</template>

<script setup lang="ts">
import ItemComponent from '@/ui-componenet/ItemComponent.vue';
import { dummyWishList } from "@/dummy/DummyWishList";
import {ProductDTO} from "@/dto/RegisteredProductDTO";
import { ref, defineProps } from "vue";
import { ItemViewProps } from '@/ui-componenet/WishItemComponent.vue';
import {DistinctSet} from "@yahvz01/utilcollection";

interface ProductListContainerProps {
    query: string;
}

const props = defineProps<ProductListContainerProps>();

// const store = ref(new DistinctSet(( item : ProductDTO ) => item.product ))
//
// dummyWishList.forEach( (item, index) => {
//     store.value.add(item);
// })

</script>

<style scoped>

</style>