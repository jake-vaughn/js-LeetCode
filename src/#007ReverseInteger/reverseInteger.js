/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  MAX_INT32 = 2147483647;
  ret = 0;
  let negative = false;
  if (x < 0) {
    negative = true;
    x = -x;
  }
  while (x != 0) {
    ret = ret * 10 + (x % 10);
    x -= x % 10;
    x /= 10;
    if (ret > MAX_INT32) {
      if (negative && ret == MAX_INT32 + 1) {
        return -ret;
      }
      return 0;
    }
  }
  if (negative) {
    return -ret;
  }
  return ret;
};

function main() {
  console.log("returned", reverse(120));
}

main();
