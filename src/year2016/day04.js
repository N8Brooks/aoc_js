import _ from "lodash";

import { Counter } from "../utils/collections.js";

function process(text) {
  const ret = [];

  for (const room of text.trim().split("\n")) {
    const [, title, section, proposed] = /([a-z-]+)-(\d+)\[([a-z]+)\]/.exec(
      room
    );

    const counts = new Counter(title.replaceAll("-", "")).counts;
    const checksum = Array.from(counts.keys())
      .map((key) => [key, counts.get(key)])
      .sort((a, b) =>
        a[1] == b[1] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1] - a[1]
      )
      .slice(0, 5)
      .map(([a]) => a)
      .join("");

    if (checksum === proposed) {
      ret.push([Number(section), title]);
    }
  }

  return ret;
}

export function part1(text) {
  return _.zip(...process(text))[0].reduce((a, b) => a + b);
}

export function part2(text, target = "northpole object storage") {
  function shift(word, n) {
    return word
      .split("")
      .map((c) => String.fromCharCode(((c.charCodeAt(0) - 97 + n) % 26) + 97))
      .join("");
  }

  return process(text).filter(
    ([section, title]) =>
      title
        .split("-")
        .map((word) => shift(word, section))
        .join(" ") === target
  )[0][0];
}
