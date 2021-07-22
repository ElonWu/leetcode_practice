var convert = function(s, numRows) {
    if(numRows < 2) return s;

    let str = "";
    // 将 s 切成若干个最长长度为 gap 的组；
    const gap = numRows * 2 - 2, groupCount = Math.ceil(s.length / gap);

    // 逐行追加字符
    for(let i = 0; i < numRows; i++) {
        // 逐组查询满足 i 行的字符
        for(let j = 0; j < groupCount; j++) {
            const firstMatchIndex = gap * j + i;

            if(firstMatchIndex >= s.length) break;

            // 每组首个处于 i 行的字符
            str += s[firstMatchIndex];

            // 如果 i行 不是第一行 或 最后一行， i行 将可能拥有第二个匹配的字符
            if( i !== 0 && i !== numRows-1) {
                let matchIndex = (j + 1) * gap - i; // 下标规律
                if(matchIndex < s.length) str += s[matchIndex]; // 加入本组 i 行第二个匹配字符
            }
        }
    }

    return str;
};


const source = "LEETCODEISHIRING";

console.log(convert(source, 3))