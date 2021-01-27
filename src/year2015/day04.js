import { createHash } from "crypto";

function process(text, start) {
  const prefix = createHash("md5").update(text.trim());

  for (let i = 0; ; i++) {
    if (prefix.copy().update(i.toString()).digest("hex").startsWith(start)) {
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
