

<template>
	<div>
		<LineController id="test" :data="data" />
	</div>
</template>

<script setup lang="ts">
import { Line as LineController } from "vue-chartjs";
import { PriceHistory} from "@/dto/RegisteredProductDTO";

interface ComparePriceByMallProps {
    data : Array<PriceHistory>
}

const props = defineProps<ComparePriceByMallProps>()

const priceData = props.data.map( data => data.price);
// const priceData = props.data.map( data => data.mall);

const padding = 0.25; // 10% 여유 공간
const minValue = Math.min(...priceData) * (1 - padding);
const maxValue = Math.max(...priceData) * (1 + padding);

const data = {
    labels : props.data.map( data => data.date ),
    datasets : [
        {
            label : "가격",
            data : props.data.map( data => data.price )
        }
    ],
    options : {
        responsive : true,
        scales : {
            y : {
                min : minValue,
                max : maxValue
            }
        },
        plugins : {
            tooltip : {
                callbacks : {
                    afterBody : (context) => {
                        const index = context[0].dataIndex;
                        const extraInfo = `추가 정보 : ${index}`;
                        return extraInfo;
                    }
                }
            }
        }
    }
}
</script>