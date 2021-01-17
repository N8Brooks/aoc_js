import md5 from "md5";

function process(text, start) {
  const prefix = text.trim();

  for (let i = 0; ; i++) {
    if (md5(prefix + i).startsWith(start)) {
      return i;
    }
  }
}

export function part1(text, start = "00000") {
  return process(text, start);
}

export function part2(text, start = "000000") {
  return process(text, start);
}
