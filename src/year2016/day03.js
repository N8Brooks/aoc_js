import _ from "lodash";

function process(text) {
  return text
    .trim()
    .split("\n")
    .map((line) => line.match(/\d+/g).map(Number));
}

function total(sum, [a, b, c]) {
  return sum + (a < b + c && b < a + c && c < a + b);
}

export function part1(text) {
  return process(text).reduce(total, 0);
}

export function part2(text) {
  return _.zip(...process(text))
    .map((col) => _.chunk(col, 3).reduce(total, 0))
    .reduce((a, b) => a + b);
}
