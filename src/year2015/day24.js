import { powerSet } from "combinatorial-generators";

function process(text, k) {
  const nums = text.trim().split("\n").map(Number);
  const target = nums.reduce((a, b) => a + b) / k;

  for (const group of powerSet(nums)) {
    if (group.reduce((a, b) => a + b, 0) == target) {
      return group.reduce((a, b) => a * b);
    }
  }
}

export function part1(text, k = 3) {
  return process(text, k);
}

export function part2(text, k = 4) {
  return process(text, k);
}
