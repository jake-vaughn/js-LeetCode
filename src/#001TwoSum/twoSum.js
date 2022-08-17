function twoSum(nums, target) {
  const m = new Map();
  let i = 0;
  for (const num of nums) {
    if (m.has(num)) {
      return [m.get(num), i];
    }
    m.set(target - num, i);
    i++;
  }
  return [];
}

function main() {
  console.log(twoSum([2, 7, 11, 15], 9));
}

main();
