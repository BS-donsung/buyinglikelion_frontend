

export function splitWords(arr : Array<string>) {
    // 각 문자열을 띄어쓰기로 분해하고, 하나의 배열로 펼침
    return arr.flatMap(sentence => sentence.split(' '));
}

export function findTopFrequentWords(arr : Array<string>, n : number) : Array<string> {
    // 단어의 등장 횟수를 계산
    var wordFrequency = arr.reduce(function(acc, curr) {
        if (typeof acc[curr] == 'undefined') {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});

    // 배열로 변환하고 등장 횟수에 따라 내림차순 정렬
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);

    // 상위 n개 단어 반환
    return sortedWords.slice(0, n).map(word => word[0]);
}
