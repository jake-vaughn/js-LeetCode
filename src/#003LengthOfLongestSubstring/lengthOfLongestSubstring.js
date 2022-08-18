/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charSet = new Set();
  let left = 0,
    right = 0;
  let res = 0;
  while (right < s.length) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};

function main() {
  console.log(lengthOfLongestSubstring("pwwkew"));
}

main();
