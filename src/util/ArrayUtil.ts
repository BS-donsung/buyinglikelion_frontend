

export function shuffle<_Tp>(array : Array<_Tp>) : Array<_Tp>{
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // 남은 요소가 없을 때까지 반복
    while (currentIndex !== 0) {
        // 남은 요소 중에서 무작위 인덱스를 선택
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // 현재 요소와 무작위로 선택한 요소를 교환
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
