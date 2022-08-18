/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n1Len = nums1.length;
  const n2Len = nums2.length;
  //console.log(Math.round((n1Len + n2Len) / 2));
  const half = Math.round((n1Len + n2Len) / 2);
  let j = 0;
  let k = 0;
  let r;
  let l;
  for (let idx = 0; idx <= half; idx++) {
    console.log("start", l, r);

    l = r;
    if (j == n1Len) {
      r = nums2[k];
      k++;
    } else if (k == n2Len) {
      r = nums1[j];
      j++;
    } else {
      if (nums1[j] < nums2[k]) {
        r = nums1[j];
        j++;
      } else {
        r = nums2[k];
        k++;
      }
    }
    console.log("end", l, r);
  }
  if ((n1Len + n2Len) % 2 == 1) {
    return l;
  }
  return (l + r) / 2;
};

function main() {
  console.log(findMedianSortedArrays([1, 3], [2]));
}

main();
