import _ from "lodash";
import md5 from "md5";

import { islice } from "../utils/itertools.js";

function* hash(text, start) {
  const prefix = text.trim();
  let i = 0;

  while (true) {
    const hexadecimal = md5(`${prefix}${i++}`);
    if (hexadecimal.startsWith(start)) {
      yield hexadecimal;
    }
  }
}

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
