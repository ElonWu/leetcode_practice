/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let cache = {},
    hasMid = false,
    result = 0;

  for (let i = 0; i < s.length; i++) {
    cache[s[i]] = (cache[s[i]] || 0) + 1;
  }

  Object.values(cache).forEach((count) => {
    if (count % 2 === 0) {
      result += count;
    } else {
      result += count - 1;

      if (!hasMid) {
        hasMid = true;
        result += 1;
      }
    }
  });

  return result;
};

const s =
  'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';

console.log(longestPalindrome(s));
