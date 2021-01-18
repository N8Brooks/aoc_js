import { windowed } from "../utils/itertools.js";

const naughty = ["ab", "cd", "pq", "xy"];

export function part1(text) {
  return text
    .trim()
    .split("\n")
    .reduce((sum, line) => {
      if (naughty.some((element) => line.includes(element))) {
        return sum;
      }

      if ((line.match(/[aeiou]/g) || []).length < 3) {
        return sum;
      }

      for (const [a, b] of windowed(line)) {
        if (a == b) {
          return sum + 1;
        }
      }
      return sum;
    }, 0);
}

export function part2(text) {
  return text
    .trim()
    .split("\n")
    .reduce((sum, line) => {
      let noSplit = true;
      for (const [a, , c] of windowed(line, 3)) {
        if (a === c) {
          noSplit = false;
          break;
        }
      }
      if (noSplit) {
        return sum;
      }

      let first = "";
      const pairs = new Set();
      for (const [a, b] of windowed(line)) {
        const second = `${a}${b}`;
        if (pairs.has(second)) {
          return sum + 1;
        }
        pairs.add(first);
        first = second;
      }
      return sum;
    }, 0);
}
