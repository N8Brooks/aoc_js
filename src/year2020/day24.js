import { add } from "../utils/math.js";

const dir = {
  ne: [0, 1],
  e: [1, 0],
  se: [1, -1],
  sw: [0, -1],
  w: [-1, 0],
  nw: [-1, 1],
};

export function part1(text) {
  return tileCount(flips(text));
}

export function part2(text, days = 100) {
  const tiles = new Map(flips(text));
  const counts = new Map();

  for (let i = 0; i < days; i++) {
    countNeighbors();
    nextTiles();
  }

  return tileCount(Array.from(tiles));

  function countNeighbors() {
    counts.clear();
    for (const [xd, yd] of Object.values(dir)) {
      for (const [x1, ys] of tiles) {
        for (const y1 of ys) {
          const x2 = x1 + xd;
          const y2 = y1 + yd;

          const count = counts.get(x2);
          if (count === undefined) {
            counts.set(x2, new Map([[y2, 1]]));
          } else {
            count.set(y2, (count.get(y2) ?? 0) + 1);
          }
        }
      }
    }
  }

  function nextTiles() {
    for (const [x, ys] of counts) {
      tiles.set(x, nextRow(x, ys));
    }
  }

  function nextRow(x, ys) {
    return new Set(
      Array.from(ys)
        .filter(([y, count]) => count === 2 || (count === 1 && tiles.get(x)?.has(y)))
        .map(([y]) => y)
    );
  }
}

function flips(text) {
  const xs = new Map();

  text.trim().split("\n").forEach(incrementIndex);

  return Array.from(xs).map(filterEvens);

  function incrementIndex(line) {
    const [x, y] = Array.from(line.matchAll(/[ns]?[ew]/g))
      .map((tile) => dir[tile])
      .reduce(add, [0, 0]);

    const ys = xs.get(x);
    if (ys === undefined) {
      xs.set(x, new Map([[y, 1]]));
    } else {
      ys.set(y, (ys.get(y) ?? 0) + 1);
    }
  }

  function filterEvens([x, ys]) {
    return [
      x,
      new Set(
        Array.from(ys)
          .filter(([, count]) => count % 2)
          .map(([y]) => y)
      ),
    ];
  }
}

function tileCount(tiles) {
  return tiles.map(([, ys]) => Array.from(ys.values())).flat().length;
}
