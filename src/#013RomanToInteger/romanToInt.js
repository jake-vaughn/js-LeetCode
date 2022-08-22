/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ret = 0;

  (flagI = false), (flagX = false), (flagC = false);

  for (let c of s) {
    console.log(c, ret);
    switch (c) {
      case "I":
        ret += 1;
        flagI = true;
        break;
      case "V":
        if (flagI) {
          ret -= 2;
        }
        ret += 5;
        break;

      case "X":
        if (flagI) {
          ret -= 2;
          flagI = false;
        }
        flagX = true;
        ret += 10;
        break;

      case "L":
        if (flagX) {
          ret -= 20;
        }
        ret += 50;
        break;

      case "C":
        if (flagX) {
          ret -= 20;
          flagX = false;
        }
        flagC = true;
        ret += 100;
        break;

      case "D":
        if (flagC) {
          ret -= 200;
        }
        ret += 500;
        break;

      case "M":
        if (flagC) {
          ret -= 200;
          flagC = false;
        }
        ret += 1000;
        break;
    }
  }
  return ret;
};

function main() {
  console.log("returned", romanToInt("MCMXCIV"));
}

main();
