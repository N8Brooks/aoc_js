// @flow

import _ from "lodash";
import { readFileSync } from "fs";

class Counter {
  constructor(elements) {
    this.counts = new Map();
    for (const key of elements) {
      this.counts.set(key, this.counts.get(key) + 1 || 1);
    }
  }

  mode() {
    let maxKey,
      maxVal = -Infinity;
    for (const [key, val] of this.counts) {
      if (maxVal < val) {
        maxKey = key;
        maxVal = val;
      }
    }
    return maxKey;
  }

  antimode() {
    let minKey,
      minVal = Infinity;
    for (const [key, val] of this.counts) {
      if (val < minVal) {
        minKey = key;
        minVal = val;
      }
    }
    return minKey;
  }
}

export function part1(text) {
  return _.zip(
    ...text
      .trim()
      .split("\n")
      .map((line) => line.split(""))
  )
    .map((col) => new Counter(col).mode())
    .join("");
}

export function part2(text) {
  return _.zip(
    ...text
      .trim()
      .split("\n")
      .map((line) => line.split(""))
  )
    .map((col) => new Counter(col).antimode())
    .join("");
}

const text = readFileSync("data/year2016/day06.txt", "utf8");

console.log(part1(text));
console.log(part2(text));
