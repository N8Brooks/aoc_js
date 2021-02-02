import { createHash } from "crypto";
import _ from "lodash";
import { islice } from "../utils/itertools.js";

export function part1(text, length = 8, start = "00000") {
  return Array.from(islice(hash(text, start), 0, length, 1))
    .map((hex) => hex[start.length])
    .join("");
}

export function part2(text, length = 8, start = "00000") {
  function char(i) {
    while (password[i] === undefined) {
      const code = hashes.next().value;
      const check = code.charCodeAt(start.length) - 48;
      if (i <= check && check < length && password[check] === undefined) {
        password[check] = code[start.length + 1];
      }
    }
    return password[i];
  }

  const password = new Array(length);
  const hashes = hash(text, start);

  return _.range(length).map(char).join("");
}

function* hash(text, start) {
  const prefix = createHash("md5").update(text.trim());
  let i = 0;

  while (true) {
    const hexadecimal = prefix
      .copy()
      .update((i++).toString())
      .digest("hex");

    if (hexadecimal.startsWith(start)) {
      yield hexadecimal;
    }
  }
}
