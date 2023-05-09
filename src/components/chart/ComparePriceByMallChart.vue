<template>
	<BarController id="test" :data="data" style="height: 300px; width: 600px" />
</template>

<script setup lang="ts">
import { Bar as BarController } from "vue-chartjs";
import {MallInfoAndPrice} from "@/dto/RegisteredProductDTO";

interface ComparePriceByMallProps {
    data : Array<MallInfoAndPrice>
}

const props = defineProps<ComparePriceByMallProps>()

const data = {
    labels : props.data.map( data => data.mall.koreanName ),
    datasets : [
        {
            label : "가격",
            data : props.data.map( data => data.price ),
            backgroundColor : props.data.map( data => data.mall.rgbaColor() )
        }
    ],
    options : {
        responsive : true,
        maintainAspectRatio : false,
        aspectRatio : 1,
    }
}
</script>