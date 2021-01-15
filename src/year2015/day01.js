export function part1(text) {
  return text
    .trim()
    .split("")
    .reduce((a, b) => a + (b === "(" ? 1 : -1), 0);
}

export function part2(text) {
  let position = 0,
    i = 1;
  for (const char of text.split("")) {
    if (char === "(") {
      position++;
    } else if (--position < 0) {
      return i;
    }
    i++;
  }
}
