var lengthOfLongestSubstring = function(s) {
    let res = 0, start = 0, end = 0, cache={};

    for(let i=0; i<s.length; i++) {
        let char = s[i], lastSeen = cache[char];

        if(lastSeen !== null && lastSeen>=start) {
            // 更新起点
            start = lastSeen + 1;
        }

        end = i; // 更新终点

        res = Math.max(res, end - start+1); // 更新最长

        cache[char] = i; // 更新当前字符最近的位置
    }

    return res;
};


const source = "abcabcbb";


console.log(lengthOfLongestSubstring(source));