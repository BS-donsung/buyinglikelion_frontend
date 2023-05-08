
function sortAndGetFrontBy<_Tp>(arr : Array<_Tp>, targetValue : _Tp) : Array<_Tp>{
    return arr.sort((a, b) => {
        if (a === targetValue) return -1;
        if (b === targetValue) return 1;

        // 대소문자 구분 없이 정렬하려면 toLowerCase() 사용
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;

    });
}


export { sortAndGetFrontBy };