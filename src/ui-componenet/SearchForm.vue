<template>
	<div class="container-center-horizontal">
		<div class="searchform">
			<input
					class="inputbox"
					type="text"
					:placeholder="props.placeholder"
					v-model="inputState.inputData"
					ref="inputEle"
					@keydown="enterToSummit"
			/>
			<img class="searchic pointer" src="@asset/icon/search.svg" alt="searchic" @click="clickToSummit"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

interface SearchFormProps {
    query? : string,
	placeholder? : string,
    onsummit : ( queryString : string ) => void
}
const props = withDefaults(defineProps<SearchFormProps>(), {
    placeholder : "검색어를 입력해 주세요."
})

const inputState = reactive({
    inputData : props?.query ?? ""
})

const inputEle = ref<HTMLInputElement | null>(null);

function enterToSummit( event : KeyboardEvent ) {
	if(event.key === "Enter") {
        props.onsummit(inputState.inputData)
	}
}

function clickToSummit() {
    props.onsummit( inputState.inputData )
}
</script>

<style scoped>
.searchform {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid black;
	padding: 0.5rem;
}

.inputbox {
    align-self: flex-end;
    font-size: 3rem;
    line-height: normal;
    min-height: 4rem;
    border: none;
	width: 100%;
}

.inputbox:focus {
    outline: none;
    box-shadow: none;
    border: none;
}

.searchic {
    height: 3rem;
    margin-top: 6px;
    width: 3rem;

}
</style>