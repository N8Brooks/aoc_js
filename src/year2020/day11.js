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
  const [seats] = indexSeats(text);
  const neighbors = Array.from(graph());

  return simulate(neighbors, cap);

  function* graph() {
    for (const [y, row] of seats.entries()) {
      for (const x of row.keys()) {
        yield directions
          .map(([yd, xd]) => seats.get(y + yd)?.get(x + xd))
          .filter((index) => index !== undefined);
      }
    }
  }
}

export function part2(text, cap = 5) {
  const [seats, height, width] = indexSeats(text);
  const neighbors = Array.from(graph());

  return simulate(neighbors, cap);

  function* graph() {
    for (const [y1, row] of seats.entries()) {
      for (const x1 of row.keys()) {
        yield directions
          .map(([yd, xd]) => adjacent(y1, x1, yd, xd))
          .filter((index) => index !== undefined);
      }
    }
  }

  function adjacent(y1, x1, yd, xd) {
    let y2 = y1 + yd;
    let x2 = x1 + xd;
    while (0 <= y2 && y2 < height && 0 <= x2 && x2 < width) {
      const index = seats.get(y2)?.get(x2);
      if (index !== undefined) {
        return index;
      }
      y2 += yd;
      x2 += xd;
    }
  }
}

function indexSeats(text) {
  const processed = text.trim().split("\n");
  let count = 0;

  return [
    new Map(processed.map((row, y) => [y, new Map(indexRow(row))])),
    processed.length,
    processed[0].length,
  ];

  function indexRow(row) {
    return row
      .split("")
      .map((seat, x) => [seat, x])
      .filter(([seat]) => seat === "L")
      .map(([, x]) => [x, count++]);
  }
}

function simulate(neighbors, cap) {
  const length = neighbors.length;

  let previous;
  let current = Array(length).fill(false);

  do {
    previous = current;
    current = current.map((seat, i) => {
      const count = neighbors[i].reduce((sum, j) => sum + current[j], 0);
      return seat ? count < cap : count === 0;
    });
  } while (current.some((seat, i) => previous[i] !== seat));

  return current.reduce((sum, seat) => sum + seat, 0);
}
