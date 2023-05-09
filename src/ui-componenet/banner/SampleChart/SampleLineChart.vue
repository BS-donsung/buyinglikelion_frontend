<template>
	<LineController id="mock01" :data="data" style="height: 25rem"/>
</template>


<script setup lang="ts">
import { Line as LineController } from "vue-chartjs"

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = ["1월", "2월", "3월", "4월", "5월", "6월"]
const data = {
    labels: labels,
    datasets: [
        {
            label: '옥션 A',
            data: [52, 32, 43, 55, 33, 22],
            borderColor: "rgba(239, 83, 80)",
            backgroundColor: "rgba(239, 83, 80, 0.5)",
        },
        {
            label: 'G마켓 B',
            data: [70, 55, 31, 44, 42, 21],
            borderColor: "rgba(14, 230, 30)",
            backgroundColor: "rgba(14, 230, 30, 0.5)",
        },
        {
            label: '11번가 C',
            data: [62, 88, 50, 40, 28, 38],
            borderColor: "rgba(13, 71, 161)",
            backgroundColor: "rgba(13, 71, 161, 0.5)",
        },
    ],
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    }
};
</script>

<style scoped lang="scss">

</style>