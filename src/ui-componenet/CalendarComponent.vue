<template>
	<div class="container">
		<div class="header">
			<div class="btn prevMonth" @click="moveToPrevMonth"></div>
			<h2 class="thisMonth">{{calenderState.currentDate.year}}년 {{ calenderState.currentDate.month }}월</h2>
			<div class="btn nextMonth" @click="moveToNextMonth"></div>
		</div>

		<div class="grid dateHead">
			<div>일</div>
			<div>월</div>
			<div>화</div>
			<div>수</div>
			<div>목</div>
			<div>금</div>
			<div>토</div>
		</div>

		<div class="grid dateBoard" v-html="calendarData.dateBoardHtml"></div>
	</div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import {StrictDate} from "@/util/StrictDate";

interface CalenderProps {
    initDate? : StrictDate,
	onChange : ( date : StrictDate ) => void
	highlightDate : StrictDate[]
}

const props = withDefaults(defineProps<CalenderProps>(), {
    initDate : StrictDate.ofDate()
})

const calenderState = reactive({
	currentDate : props.initDate
})

const calendarData = computed(() => makeCalendar(calenderState.currentDate));

const moveToPrevMonth = () => {
    calenderState.currentDate = calenderState.currentDate.addMonth(-1);
    props.onChange( calenderState.currentDate );
};

const moveToNextMonth = () => {
    calenderState.currentDate = calenderState.currentDate.addMonth(1);
    props.onChange( calenderState.currentDate );
};

const makeCalendar = (date: StrictDate) => {
    const currentYear =  date.year
    const currentMonth = date.month

    const firstDay = date.setDate(1).toDate().getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    const today = new Date();

    let htmlDummy = '';

    for (let i = 0; i < firstDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        const isToday = i === today.getDate() && currentYear === today.getFullYear() && currentMonth === today.getMonth() + 1;

        const isSelectedDates = props.highlightDate.map( data => data.date ).includes(i)
        htmlDummy += `<div class="${isToday ? "today" : ""} ${isSelectedDates ? "selectedDates" : ""}">${i}</div>`;
    }

    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<div class="noColor"></div>`;
    }

    return {
        dateBoardHtml: htmlDummy,
        currentYearMonth: `${currentYear}년 ${currentMonth}월`,
    }
}


</script>

<style>

@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
.dateHead div {
    text-align: center;
    border-radius: 5px;
    font-weight: bold;
}

.grid.dateBoard {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-gap: 5px;
    align-items: center;
    justify-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-gap: 5px;
}

.grid div {
    padding: .6rem;
    font-size: 16px;
    /* cursor: pointer; */
}

.dateBoard {
    color: #222;
}

.dateBoard div {
    height: 36px;
    width: 36px;
    padding: .6rem .8rem;
    border-radius: 50px;
    display: flex;
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */

}

.selectedDates {
    background: rgba(213, 193, 173, 0.45); /* #D5C1AD 투명도 0.45*/
    font-weight: bold;
    color: #222;
}

.today {
    background-color: #A3353E;
    font-weight: bold;
    color: #ffffff;
}

/* .noColor {
  background: #D5C1AD;
  opacity: 0.45;
} */

.header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}

/* <좌우버튼> */
.btn {
    display: block;
    width: 20px;
    height: 20px;
    border: 3px solid #000;
    border-width: 3px 3px 0 0;
    cursor: pointer;
}

.prevMonth {
    transform: rotate(-135deg);
}

.nextMonth {
    transform: rotate(45deg);
}

* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Pretendard;
}

.container {
    max-width: 820px;
    padding: 0 1.4rem;
    margin-top: 1.4rem;
}

.dateHead {
    margin: .4rem 0;
}

</style>