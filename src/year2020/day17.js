import ArrayKeyedMap from "array-keyed-map";
import { CartesianProduct } from "js-combinatorics/commonjs/combinatorics.js";

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

  const counts = new ArrayKeyedMap();
  let coords = new ArrayKeyedMap(
    text
      .trim()
      .split("\n")
      .map((row, y) => {
        return row
          .trim()
          .split("")
          .map((cell, x) => [cell, x])
          .filter(([cell]) => cell === "#")
          .map(([, x]) => [[x, y, ...pad], undefined]);
      })
      .flat(1)
  );

  for (let cycle = 0; cycle < range; cycle++) {
    counts.clear();
    for (const coord of coords.keys()) {
      for (const dir of directions) {
        const neighbor = coord.map((x, i) => x + dir[i]);
        counts.set(neighbor, (counts.get(neighbor) ?? 0) + 1);
      }
    }

    coords = new ArrayKeyedMap(
      Array.from(counts.entries())
        .filter(([coord, count]) => count === 3 || (count === 2 && coords.has(coord)))
        .map(([coord]) => [coord, undefined])
    );
  }

  return Array.from(coords.keys()).length;
}
