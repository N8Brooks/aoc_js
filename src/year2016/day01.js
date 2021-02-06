import _ from "lodash";
import { add, manhattan, mult } from "../utils/math.js";

export function part1(text) {
  const [turns, dists] = process(text);

  return manhattan(turns.map((turn, i) => mult(turn, [dists[i], 0])).reduce(add));
}

export function part2(text) {
  const seen = new Set();
  let sum = [0, 0];

  for (const [turn, dist] of _.zip(...process(text))) {
    for (let i = 0; i < dist; i++) {
      sum = add(sum, turn);
      const key = `${sum[0]},${sum[1]}`;
      if (seen.has(key)) {
        return manhattan(sum);
      }
      seen.add(key);
    }
  }
}

function process(text) {
  function turn(direction) {
    return direction === "L" ? [0, 1] : [0, -1];
  }

  const accumulate = ((sum) => (value) => (sum = mult(sum, value)))([1, 0]);

  const [, turns, dists] = _.zip(
    ...text
      .trim()
      .split(", ")
      .map((line) => /([LR])(\d+)/.exec(line))
  );

  return [turns.map(turn).map(accumulate), dists.map(Number)];
}
