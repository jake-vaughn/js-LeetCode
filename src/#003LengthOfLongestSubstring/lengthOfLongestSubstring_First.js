/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let max = 0;
  let len = 0;

  for (i = 0; i < s.length; i++) {
    const start = s[i];
    len++;
    if (len > max) {
      max = len;
    }
    map.set(start, i);
    for (let j = i + 1; j < s.length; j++) {
      const end = s[j];

      if (map.has(end)) {
        i = map.get(end);
        len = 0;
        map = new Map();
        if (j == s.length - 1) {
          return max;
        }
        break;
      }
      map.set(end, j);
      len++;
      if (len > max) {
        max = len;
      }
      if (j == s.length - 1) {
        return max;
      }
    }
  }
  return max;
};

function main() {
  console.log(lengthOfLongestSubstring("pwwkew"));
}

main();
