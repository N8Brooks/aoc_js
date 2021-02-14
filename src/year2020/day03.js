const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

export function part1(text, right = 3, down = 1) {
  const processed = text.trim().split("\n");
  return process(processed, right, down, processed[0].length);
}

export function part2(text) {
  const processed = text.trim().split("\n");
  const length = processed[0].length;
  return slopes.reduce((prod, [right, down]) => prod * process(processed, right, down, length), 1);
}

function process(processed, right, down, length) {
  return processed.reduce((sum, line, index) => {
    return index % down === 0 ? sum + (line[((index * right) / down) % length] === "#") : sum;
  }, 0);
}
