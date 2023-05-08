<template>
	<div class="havenowish-container">
		<div class="havenowishscreen">
			<img class="sajaface" src="@/asset/componenticon/sajaface.png" alt="sajaface" />
			<div class="nowishtext">
				<span class="span-jjim">찜한 상품</span><span class="notosans-bold-black-20px">이 없습니다.</span>
			</div>
			<p class="nowishinnertext notosans-normal-black-20px">사자님을 위한 For you 메뉴를 확인하여 관심상품을 추가해보세요!</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use "@style/color" as color;

.wishtitle {
    letter-spacing: 0;
    line-height: normal;
    min-height: 33px;
    font-size: 24px;
}

.havenowish-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    width: 100%;

    & > * {
        flex-shrink: 0;
        pointer-events: auto;
    }
}

.havenowish {
    align-items: center;
    background-color: white;
    border: 1px none;
    display: flex;
    flex-direction: column;
    height: 440px;
    padding: 79px 144px;
    width: 832px;
}

.sajaface {
    height: 160px;
    margin-right: 20.0px;
    object-fit: cover;
    width: 160px;
}

.nowishtext {
    color: transparent;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-right: 19.0px;
    margin-top: 29px;
    min-height: 27px;
    min-width: 181px;
}

.span-jjim {
    color: color.$color-point
}

.nowishinnertext {
    align-self: flex-end;
    letter-spacing: 0;
    line-height: normal;
    margin-top: 13px;
    min-height: 27px;
    min-width: 543px;
}
</style>