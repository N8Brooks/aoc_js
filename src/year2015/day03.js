const dirs = new Map([
  ["^", [0, 1]],
  [">", [1, 0]],
  ["v", [0, -1]],
  ["<", [-1, 0]],
]);

export function part1(text) {
  let x0 = 0,
    y0 = 0;
  const locs = new Set(["0,0"]);

  text
    .trim()
    .split("")
    .forEach((dir) => {
      const [x1, y1] = dirs.get(dir);
      locs.add(`${(x0 += x1)},${(y0 += y1)}`);
    });

  return locs.size;
}

export function part2(text) {
  let santX = 0,
    santY = 0,
    roboX = 0,
    roboY = 0;
  const locs = new Set(["0,0"]);

  text
    .trim()
    .split("")
    .forEach((dir, index) => {
      const [x1, y1] = dirs.get(dir);
      if (index % 2) {
        locs.add(`${(roboX += x1)},${(roboY += y1)}`);
      } else {
        locs.add(`${(santX += x1)},${(santY += y1)}`);
      }
    });

  return locs.size;
}
