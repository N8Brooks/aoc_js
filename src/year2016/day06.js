// @flow

import _ from "lodash";
import { readFileSync } from "fs";

import { Counter } from "../utils/collections.js";

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
