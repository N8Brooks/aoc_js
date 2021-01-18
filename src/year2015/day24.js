import { Combination } from "js-combinatorics/commonjs/combinatorics.js";

function process(text, k) {
  const nums = text.trim().split("\n").map(Number);
  const target = nums.reduce((a, b) => a + b) / k;

  for (let comb = 1; comb < nums.length; comb++) {
    for (const group of new Combination(nums, comb)) {
      if (group.reduce((a, b) => a + b) == target) {
        return group.reduce((a, b) => a * b);
      }
    }
  }
}

export function part1(text, k = 3) {
  return process(text, k);
}

export function part2(text, k = 4) {
  return process(text, k);
}
