/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let ret = "";
  let one = "",
    five = "",
    ten = "";

  for (let i = 1; num > 0; i++) {
    switch (i) {
      case 1:
        one = "I";
        five = "V";
        ten = "X";
        break;
      case 2:
        one = "X";
        five = "L";
        ten = "C";
        break;

      case 3:
        one = "C";
        five = "D";
        ten = "M";
        break;

      case 4:
        one = "M";
        break;
    }
    const n = num % 10;
    if (n < 4) {
      ret = stringNTimes(one, n) + ret;
    } else if (n == 4) {
      ret = one + five + ret;
    } else if (n == 9) {
      ret = one + ten + ret;
    } else if (n >= 5) {
      ret = five + stringNTimes(one, n - 5) + ret;
    }

    num = Math.floor(num / 10);
  }
  return ret;
};

var stringNTimes = function (s, n) {
  let ret = "";
  for (let i = 1; i <= n; i++) {
    ret += s;
  }
  return ret;
};

function main() {
  console.log("returned", intToRoman(1994));
}

main();
