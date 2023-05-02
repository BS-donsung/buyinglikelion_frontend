<template>
    <div>
        <h3 class="table-title">쇼핑몰 별 최저가</h3>
        <table>
            <thead>
                <tr>
                    <th>쇼핑몰</th>
                    <th>가격</th>
                </tr>
                
            </thead>

            <tbody>
                <tr>
                    <td><img src="@/asset/mallic/mall_auction.svg"></td>
                    <td> 10,000 </td>
                </tr>
                <tr>
                    <td><img src="@/asset/mallic/mall_coupang.svg"></td>
                    <td> 10,000 </td>
                </tr>
                <tr>
                    <td><img src="@/asset/mallic/mall_gmarket.svg"></td>
                    <td> 10,000 </td>
                </tr>
                <tr>
                    <td><img src="@/asset/mallic/mall_naver.svg"></td>
                    <td> 10,000 </td>
                </tr>
                <tr>
                    <td><img src="@/asset/mallic/mall_eleventh_street.svg"></td>
                    <td> 10,000 </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
export default {
  name: 'LowPriceTable',
}
</script>

<script setup lang="ts">
import {SupportedShoppingMall} from "@/util/SupportedShoppingMall";

</script>

<style scoped>
 .table-title {
    margin-bottom: 5px;
 }

 

 thead tr {

    background-color: rgba(213, 193, 173, 0.3);
    border: 1px solid rgba(213, 193, 173, 1);
    font-size: 16px;
 }

 tr th {
    border-collapse: collapse;


 }
</style>