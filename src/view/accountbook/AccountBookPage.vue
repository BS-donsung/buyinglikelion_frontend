<template>
    AccountBook
    <div>
        <Calendar :day="[13, 14, 15]" :month="5" :year="2023" />
    </div>
    <div class="date-text">selected date</div>
    <div>
        <BuyingItem />
        <BuyingItem />
        <BuyingItem />
    </div>
</template>

<script setup lang="ts">
import Calendar from '@/ui-componenet/Calendar.vue';
import BuyingItem from "@/ui-componenet/BuyingItem.vue";
import { defineComponent } from 'vue';

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