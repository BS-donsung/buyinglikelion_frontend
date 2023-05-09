<template>
	<div class="grid-container-half">
		<div class="vertical-section-divider-right">
			<div class="account-input-container vertical-section-divider-bottom">
				<h3 class="date-text">구매 내역 추가</h3>
				<AccountInput
						class="account-input"
						:on-summit="handleAddItem"
				/>
			</div >
			<div class="">
				<CalendarComponent
						:init-date="accountbookState.date"
						:on-change="handleChange"
						:highlight-date="highlightDate"
				/>
			</div>
		</div>

		<div class="account-list flex-container column-direct">
			<ButtonTab
					:title="`이번 달 구매 내역 | ${numberOfAccountInThisMonth}개`"
					:list="priceReportTab"
					init-value="table"
					not-change-position
					:on-change="handleReportType"
			/>
			<h3 class="button-tab-extend">
				합계 : <span>{{totalPriceInThisMonth}}</span>
			</h3>
				<BuyingItem
						v-for="(data, index) in currentDate"
						:item="data"
						:key="index"
				/>
		</div>
		<LoadingModalComponent v-if="service.isPending" guide-message="구매내역을 동기화 중입니다" />
	</div>
</template>

<script setup lang="ts">
import CalendarComponent from '@/ui-componenet/CalendarComponent.vue';
import AccountInput from "@/components/input/AccountInput.vue";
import {useAccountBookService} from "@/store/AccountBookStore";
import {StrictDate} from "@/util/StrictDate";
import {computed, onMounted, reactive, ref} from "vue";
import BuyingItem from "@/ui-componenet/BuyingItem.vue";
import {AccountItem} from "@/dto/AccountItemDTO";
import PenddingComponent from "@/ui-componenet/PenddingComponent.vue";
import LoadingModalComponent from "@/components/message/LoadingModalComponent.vue";
import ButtonTab, {ButtonInTabInterface} from "@/components/tab/ButtonTab.vue";

const service = ref(useAccountBookService().service);

const accountbookState = reactive({
	date : StrictDate.ofDate().setDate(1)
})

const currentDate = computed( () => {
    const { date } = accountbookState;
    return service.value.getDataWithMonthRange(date.year, date.month)
})

const totalPriceInThisMonth = computed( () => {
    if(currentDate.value.length > 0)
        return currentDate.value.map( data => data.price).reduce( (prev, next) => prev + next).toLocaleString();
    else
        return 0;
} )

const numberOfAccountInThisMonth = computed(() => currentDate.value.length)

const highlightDate = computed(() => {
    const { date } = accountbookState;
    return service.value.getDataWithMonthRange(date.year, date.month).map( data => data.date )
})

function handleChange( newDate : StrictDate ) {
    accountbookState.date = newDate;
}

function handleAddItem( dto : AccountItem ) {
    // service.value.data.push(dto)
	service.value.addAccount(dto);
}


onMounted(async () => {
    const result = service.value.getQuery(5, 2023)
})



const priceReportTab : ButtonInTabInterface[] = [
    { title : "최신 순", value : "recent" },
    { title : "높은 가격", value : "high" },
    { title : "낮은 가격", value : "low" }
]
const reportState = reactive({
    reportType : priceReportTab[0].value
})
function handleReportType( reportType : string ) {
    reportState.reportType = reportType
}


</script>

<style scoped lang="scss">
@use "@style/color" as color;

.date-text {
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
}
.account-input-container {
	margin: 3rem 0;
}

.account-input {
    margin: 0 auto;
}

.account-list {
	margin: 3rem 0;
}
</style>