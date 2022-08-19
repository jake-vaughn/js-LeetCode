/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  l = 1;
  r = 1;
  if (x < 0) {
    return false;
  }
  while (x >= l * 10) {
    l *= 10;
  }
  while (l >= r) {
    console.log(Math.floor(x / l) % 10, Math.floor(x / r) % 10);
    if (Math.floor(x / l) % 10 != Math.floor(x / r) % 10) {
      return false;
    }
    l /= 10;
    r *= 10;
  }
  return true;
};

function main() {
  console.log("returned", isPalindrome(9999));
}

main();
