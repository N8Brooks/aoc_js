// @flow

import _ from "lodash";
import { add, complex, multiply } from "mathjs";
import { readFileSync } from "fs";

function process(text) {
  function turn(direction) {
    return direction === "L" ? complex(0, 1) : complex(0, -1);
  }

  const accumulate = ((sum) => (value) => (sum = multiply(sum, value)))(1);

  const [, turns, dists] = _.zip(
    ...text
      .trim()
      .split(", ")
      .map((line) => /([LR])(\d+)/.exec(line))
  );

  return [turns.map(turn).map(accumulate), dists.map(Number)];
}

function manhatten(location) {
  return Math.abs(location.re) + Math.abs(location.im);
}

export function part1(text) {
  const [turns, dists] = process(text);

  return manhatten(
    turns.map((turn, i) => multiply(turn, dists[i])).reduce((a, b) => add(a, b))
  );
}

export function part2(text) {
  const [turns, dists] = process(text);
  const seen = new Set();
  let sum = complex(0, 0);

  for (let i = 0; ; i++) {
    const turn = turns[i];
    for (let j = 0; j < dists[i]; j++) {
      sum = add(sum, turn);
      const key = `${sum.re},${sum.im}`;
      if (seen.has(key)) return manhatten(sum);
      seen.add(key);
    }
  }
}

const text = readFileSync("data/year2016/day01.txt", "utf8");

console.log(part1(text));
console.log(part2(text));
