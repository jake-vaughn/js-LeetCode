/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  let even = false;
  let idx = 0;
  let l = 0;
  let r = 0;
  for (idx = 0; idx < s.length; even = !even) {
    if (even) {
      l = idx - 1;
      r = idx;
    } else {
      l = idx;
      r = idx;
      idx++;
    }
    const curPalindrome = palindromeCheck(s, l, r);
    if (curPalindrome.length > res.length) {
      res = curPalindrome;
    }
  }
  return res;
};

var palindromeCheck = function (s, l, r) {
  let curPalindrome = "";
  if (l == r) {
    curPalindrome = s[l];
    l--;
    r++;
  }
  while (l >= 0 && r < s.length) {
    if (s[l] != s[r]) {
      break;
    }
    curPalindrome = s[l] + curPalindrome + s[r];
    l--;
    r++;
  }
  return curPalindrome;
};

function main() {
  console.log("returned", longestPalindrome("abcba"));
}

main();
