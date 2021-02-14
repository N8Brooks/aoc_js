// TODO: pre-compute neighbors so that they don't have to be checked 8x

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function part1(text, cap = 4) {
  return process(text, cap, neighbors);

  function neighbors(y1, x1, height, width, current) {
    return directions.reduce((sum, [yd, xd]) => {
      const y2 = y1 + yd;
      const x2 = x1 + xd;
      return 0 <= y2 && y2 < height && 0 <= x2 && x2 < width
        ? sum + (current[y2][x2] === "#")
        : sum;
    }, 0);
  }
}

export function part2(text, cap = 5) {
  return process(text, cap, neighbors);

  function neighbors(y1, x1, height, width, current) {
    return directions.reduce((sum, [dy, dx]) => {
      let y2 = y1 + dy;
      let x2 = x1 + dx;
      while (0 <= y2 && y2 < height && 0 <= x2 && x2 < width) {
        switch (current[y2][x2]) {
          case "#":
            return sum + 1;
          case "L":
            return sum;
        }
        y2 += dy;
        x2 += dx;
      }
      return sum;
    }, 0);
  }
}

function process(text, cap, neighbors) {
  let current = text
    .trim()
    .split("\n")
    .map((row) => row.trim().split(""));

  const height = current.length;
  const width = current[0].length;

  let previous = Array.from({ length: height }, () => Array(width).fill(""));

  while (current.some((row, y) => previous[y].some((seat, x) => seat !== row[x]))) {
    previous = current;
    current = newCurrent();
  }

  return current.reduce((matSum, row) => {
    return matSum + row.reduce((rowSum, seat) => rowSum + (seat === "#"), 0);
  }, 0);

  function newCurrent() {
    return current.map((row, y) => {
      return row.map((seat, x) => {
        if (seat === "L") {
          return neighbors(y, x, height, width, current) === 0 ? "#" : "L";
        } else if (seat === "#") {
          return neighbors(y, x, height, width, current) < cap ? "#" : "L";
        }
        return ".";
      });
    });
  }
}
