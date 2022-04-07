var wordBreak = function (s, wordDict) {
  let cache = new Array(s.length + 1).fill(false);
  cache[0] = [true];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // 把 0 ~ i; 切分为 0 ~ j 和 j + 1 ~ i
      if (cache[j] && wordDict.includes(s.slice(j, i))) {
        cache[i] = true;
        break;
      }
    }
  }

  return cache[s.length];
};

// const s =
//     'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//   wordDict = [
//     'aa',
//     'aaa',
//     'aaaa',
//     'aaaaa',
//     'aaaaaa',
//     'aaaaaaa',
//     'aaaaaaaa',
//     'aaaaaaaaa',
//     'aaaaaaaaaa',
//     'ba',
//   ];

const s = 'leetcode',
  wordDict = ['leet', 'code'];

// const s = 'applepenapple',
//   wordDict = ['apple', 'pen'];
// const s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]

console.log(wordBreak(s, wordDict));
