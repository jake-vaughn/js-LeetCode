/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let matches = 0;
  let i = s.length - 1;
  let j = p.length - 1;
  while (i >= 0) {
    if (j < 0) {
      return false;
    }
    console.log(`Comparing ${s[i]} to ${p[j]}`);
    // * wildcard handling
    if (p[j] == "*") {
      while (i >= 0 && (s[i] == p[j - 1] || p[j - 1] == ".")) {
        matches++;
        i--;
      }
      console.log(matches, "Matches");
      while (matches > 0) {
        console.log(
          `isMatch on ${s.substring(0, i + 1)} and ${p.substring(0, j - 1)}`
        );
        if (isMatch(s.substring(0, i + 1), p.substring(0, j - 1))) {
          return true;
        } else {
          console.log("was False");
          i++;
          matches--;
        }
      }
      j -= 2;
      continue;
    }
    // Base if equal case
    if (s[i] == p[j] || p[j] == ".") {
      i--;
      j--;
    } else {
      return false;
    }
  }
  return pWildCheck(p, j);
};

// Checks for wilds at end of search
var pWildCheck = function (p, j) {
  while (j >= 0) {
    if (p[j] == "*") {
      if (j == 1) {
        return true;
      }
      j -= 2;
    } else {
      return false;
    }
  }
  return true;
};

function main() {
  console.log("returned", isMatch("aaa", "ab*a*c*a"));
}

main();
