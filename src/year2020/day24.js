import { add } from "../utils/math.js";
import { pair, unpair } from "../utils/pairing.js";

const dir = {
  ne: [0, 1],
  e: [1, 0],
  se: [1, -1],
  sw: [0, -1],
  w: [-1, 0],
  nw: [-1, 1],
};

export function part1(text) {
  return oddFlips(text).size;
}

export function part2(text, days = 100) {
  const counts = new Map();
  let tiles = oddFlips(text);

  for (let i = 0; i < days; i++) {
    countNeighbors();
    nextTiles();
  }

  return tiles.size;

  function countNeighbors() {
    counts.clear();
    for (const [xd, yd] of Object.values(dir)) {
      for (const z1 of tiles) {
        const [x1, y1] = unpair(z1);
        const z2 = pair(x1 + xd, y1 + yd);
        counts.set(z2, (counts.get(z2) ?? 0) + 1);
      }
    }
  }

  function nextTiles() {
    tiles = new Set(
      Array.from(counts)
        .filter(([z, count]) => count == 2 || (count == 1 && tiles.has(z)))
        .map(([z]) => z)
    );
  }
}

function oddFlips(text) {
  const flips = new Map();

  text.trim().split("\n").forEach(incrementIndex);

  return new Set(
    Array.from(flips)
      .filter(([, flip]) => flip % 2)
      .map(([z]) => z)
  );

  function incrementIndex(line) {
    const [x, y] = Array.from(line.matchAll(/[ns]?[ew]/g))
      .map((tile) => dir[tile])
      .reduce(add, [0, 0]);

    const z = pair(x, y);
    flips.set(z, (flips.get(z) ?? 0) + 1);
  }
}
