/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAXINT32 = 2147483647;
  const sLen = s.length;
  let ret = 0;
  let i = 0;
  let negative = false;

  while (i < sLen && s[i] == " ") {
    i++;
  }
  if (i < sLen && (s[i] == "-" || s[i] == "+")) {
    if (s[i] == "-") {
      negative = true;
    }
    i++;
  }
  for (i; i < sLen; i++) {
    switch (s[i]) {
      case "0":
        ret = ret * 10 + 0;
        break;
      case "1":
        ret = ret * 10 + 1;
        break;
      case "2":
        ret = ret * 10 + 2;
        break;
      case "3":
        ret = ret * 10 + 3;
        break;
      case "4":
        ret = ret * 10 + 4;
        break;
      case "5":
        ret = ret * 10 + 5;
        break;
      case "6":
        ret = ret * 10 + 6;
        break;
      case "7":
        ret = ret * 10 + 7;
        break;
      case "8":
        ret = ret * 10 + 8;
        break;
      case "9":
        ret = ret * 10 + 9;
        break;
      default:
        if (negative) {
          return -ret;
        }
        return ret;
    }
    if (ret > MAXINT32) {
      if (negative) {
        return -MAXINT32 - 1;
      }
      return MAXINT32;
    }
  }
  if (negative) {
    return -ret;
  }
  return ret;
};

function main() {
  console.log("returned", myAtoi("4193 with words"));
}

main();
