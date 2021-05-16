const dirs = {
  L: [-1, 0],
  R: [1, 0],
  U: [0, 1],
  D: [0, -1],
};

export function part1(text) {
  const [path1, path2] = text.trim().split("\n").map(parse);
  let minDist = Infinity;

  for (const [x, ys1] of path1) {
    for (const [y] of ys1) {
      const ys2 = path2.get(x);
      if (ys2 && ys2.has(y)) {
        minDist = Math.min(minDist, Math.abs(x) + Math.abs(y));
      }
    }
  }

  return minDist;
}

export function part2(text) {
  const [path1, path2] = text.trim().split("\n").map(parse);
  let minDist = Infinity;

  for (const [x, ys1] of path1) {
    for (const [y, dist1] of ys1) {
      const ys2 = path2.get(x);
      const dist2 = ys2 && ys2.get(y);
      if (dist2) {
        minDist = Math.min(minDist, dist1 + dist2);
      }
    }
  }

  return minDist;
}

function parse(path) {
  const xs = new Map();
  let [x, y] = [0, 0];
  let i = 1;

  for (const [, dir, num] of path.matchAll(/([LRUD])(\d+)/g)) {
    const [xd, yd] = dirs[dir];
    for (let length = i + +num; i < length; i++) {
      [x, y] = [x + xd, y + yd];

      const ys = xs.get(x);
      if (ys === undefined) {
        xs.set(x, new Map([[y, i]]));
      } else {
        ys.set(y, i);
      }
    }
  }

  return xs;
}
