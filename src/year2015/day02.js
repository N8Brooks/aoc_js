function process(text) {
  return text
    .trim()
    .split("\n")
    .map((line) =>
      line
        .split("x")
        .map(Number)
        .sort((a, b) => a - b)
    );
}

export function part1(text) {
  return process(text).reduce(
    (sum, [a, b, c]) => sum + 3 * a * b + 2 * (a * c + b * c),
    0
  );
}

export function part2(text) {
  return process(text).reduce(
    (sum, [a, b, c]) => sum + a + a + b + b + a * b * c,
    0
  );
}
