export function part1(text) {
  const processed = text.trim().split("\n");

  return processed.reduce((sum, line) => {
    const [, lo, hi, char, password] = /(\d+)-(\d+) (\w): (\w+)/.exec(line);
    const count = (password.match(RegExp(char, "g")) || []).length;
    return sum + (+lo <= count && count <= +hi);
  }, 0);
}

export function part2(text) {
  const processed = text.trim().split("\n");

  return processed.reduce((sum, line) => {
    const [, a, b, char, password] = /(\d+)-(\d+) (\w): (\w+)/.exec(line);
    return sum + ((password[+a - 1] === char) ^ (password[+b - 1] === char));
  }, 0);
}
