/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ret = "";

  const minStrLen = minString(strs);
  for (let i = 0; i < minStrLen; i++) {
    let c = strs[0][i];
    for (str of strs) {
      if (str[i] != c) {
        return ret;
      }
    }
    ret = ret + c;
  }
  return ret;
};

var minString = function (strs) {
  if (strs.length == 0) {
    return 0;
  }
  let min = Number.MAX_SAFE_INTEGER;
  for (str of strs) {
    if (str.length < min) {
      min = str.length;
    }
  }
  return min;
};

function main() {
  console.log("returned", longestCommonPrefix(["asdf", "asdf"]));
}

main();
