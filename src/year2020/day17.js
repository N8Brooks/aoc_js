import { CartesianProduct } from "js-combinatorics/commonjs/combinatorics.js";
import _ from "lodash";

// TODO: implement as trie structure

export function part1(text, dimensions = 3) {
  return process(text, dimensions);
}

export function part2(text, dimensions = 4) {
  return process(text, dimensions);
}

function process(text, dimensions, range = 6) {
  const pad = Array(dimensions - 2).fill(0);
  const directions = Array.from(new CartesianProduct(...Array(dimensions).fill([-1, 1, 0])));
  directions.pop();

  const parse = _.memoize((coord) => JSON.parse(`[${coord}]`));

  let coords = {};
  text
    .trim()
    .split("\n")
    .forEach((row, y) => {
      row
        .trim()
        .split("")
        .map((cell, x) => [cell, x])
        .filter(([cell]) => cell === "#")
        .forEach(([, x]) => (coords[[x, y, ...pad]] = undefined));
    });

  for (let cycle = 0; cycle < range; cycle++) {
    const counts = {};
    Object.keys(coords).forEach((coord) => {
      directions.forEach((dir) => {
        const neighbor = parse(coord).map((x, i) => x + dir[i]);
        counts[neighbor] = (counts[neighbor] ?? 0) + 1;
      });
    });

    coords = Object.fromEntries(
      Object.entries(counts)
        .filter(([coord, count]) => count === 3 || (count === 2 && coord in coords))
        .map(([coord]) => [parse(coord), undefined])
    );
  }

  return Object.keys(coords).length;
}
