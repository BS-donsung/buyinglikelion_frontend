<template>
    AccountBook
    <div class="grid-container-half">
        <div>
            <Calendar :day="[13, 14, 15]" :month="5" :year="2023" />
        </div>

        <div>
            <AccountInput />
            <h3 class="date-text">이번 달 구매 내역</h3>
            <BuyingItem />
            <BuyingItem />
            <BuyingItem />
        </div>
    </div>
</template>

<script setup lang="ts">
import Calendar from '@/ui-componenet/Calendar.vue';
import BuyingItem from "@/ui-componenet/BuyingItem.vue";
import { defineComponent } from 'vue';
import AccountInput from "@/components/input/AccountInput.vue";

defineComponent({
  components: {
    
  },
});
interface AccountBookRouteProps {
    id? : string
}
const props = defineProps<AccountBookRouteProps>()
</script>

<style scoped>
.date-text {
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
}
</style>