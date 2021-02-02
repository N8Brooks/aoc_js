const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

export function part1(text, right = 3, down = 1) {
  return process(text.trim().split("\n"), right, down);
}

export function part2(text) {
  const processed = text.trim().split("\n");
  return slopes.reduce((prod, [right, down]) => prod * process(processed, right, down), 1);
}

function process(processed, right, down) {
  const length = processed[0].length;

  const x = processed.reduce((sum, line, index) => {
    if (index % down !== 0) {
      return sum;
    }
    return sum + (line[((index * right) / down) % length] === "#");
  }, 0);

  return x;
}
