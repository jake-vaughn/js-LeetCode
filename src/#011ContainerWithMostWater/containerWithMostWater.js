/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let hgtL = height[l];
  let hgtR = height[r];
  let maxArea = min(hgtL, hgtR) * (height.length - 1);
  console.log(
    `l:${l} r:${r} hgtL:${hgtL} hgtR:${hgtR} dist:${r - l} maxArea:${maxArea}`
  );
  while (l < r - 1) {
    if (hgtL < hgtR) {
      l++;
      console.log(
        `l:${l} r:${r} hgtL:${hgtL} hgtR:${hgtR} dist:${
          r - l
        } maxArea:${maxArea}`
      );
      if (height[l] > hgtL) {
        hgtL = height[l];
        if (min(hgtL, hgtR) * (r - l) > maxArea) {
          console.log(maxArea, "replaced with", min(hgtL, hgtR) * (r - l));
          maxArea = min(hgtL, hgtR) * (r - l);
        }
      }
    } else {
      r--;
      console.log(
        `l:${l} r:${r} hgtL:${hgtL} hgtR:${hgtR} dist:${
          r - l
        } maxArea:${maxArea}`
      );
      if (height[r] > hgtR) {
        hgtR = height[r];
        if (min(hgtL, hgtR) * (r - l) > maxArea) {
          console.log(maxArea, "replaced with", min(hgtL, hgtR) * (r - l));
          maxArea = min(hgtL, hgtR) * (r - l);
        }
      }
    }
  }
  return maxArea;
};

var min = function (a, b) {
  if (a > b) {
    return b;
  }
  return a;
};

function main() {
  console.log("returned", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
}

main();
