import _ from "lodash";

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
