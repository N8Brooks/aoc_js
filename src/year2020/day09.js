import { Counter } from "../utils/collections.js";

export function part1(text, n = 25) {
  const nums = text.trim().split("\n").map(Number);
  const counter = new Counter(nums.slice(0, n));
  const counts = counter.counts;

  for (let i = n, length = nums.length; i < length; i++) {
    const sum = nums[i];
    if (!Array.from(counts.keys()).some((addend) => counts.has(sum - addend))) {
      return sum;
    }
    counter.sub(nums[i - n]);
    counter.add(sum);
  }
}

export function part2(text, n = 25) {
  const target = part1(text, n);
  const nums = text.trim().split("\n").map(Number);
  let sum = 0;
  let i = 0;
  let j = 0;

  while (sum !== target) {
    while (sum < target) {
      sum += nums[j++];
    }
    while (target < sum) {
      sum -= nums[i++];
    }
  }

  return Math.min(...nums.slice(i, j)) + Math.max(...nums.slice(i, j));
}
