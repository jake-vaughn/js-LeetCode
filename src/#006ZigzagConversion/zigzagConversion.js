/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) {
    return s;
  }
  let ret = "";
  let toggle = true;

  for (let j = 0; j < s.length; j += numRows * 2 - 2) {
    // console.log(s[j]);
    ret += s[j];
  }
  // console.log("ends");

  for (let i = 1; i < numRows - 1; i++) {
    toggle = true;
    for (let j = i; j < s.length; toggle = !toggle) {
      // console.log(s[j], toggle, j);
      ret += s[j];
      if (toggle) {
        // get to diagonal
        j += numRows - i;
        j += numRows - 2 - 1 - i + 1;
      } else {
        // get to colum
        j += i + 1;
        j += i - 1;
      }
    }
    // console.log("ends");
  }

  for (let j = numRows - 1; j < s.length; j += numRows * 2 - 2) {
    // console.log(s[j]);
    ret += s[j];
  }
  return ret;
};

function main() {
  console.log("returned", convert("PAYPALISHIRING", 3));
}

main();
