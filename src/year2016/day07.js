import _ from "lodash";

import { windowed } from "../utils/itertools.js";

function process(ip) {
  function sort(part) {
    const hyp = part.split("]");
    return [hyp, hyp.pop()];
  }

  const [hyps, exts] = _.zip(...ip.split("[").map(sort));

  return [_.flatten(hyps), exts];
}

export function part1(text) {
  function abbas(ip) {
    for (const [a, b, c, d] of windowed(ip, 4)) {
      if (a == d && b == c && a != b) {
        return true;
      }
    }
    return false;
  }

  function tls([hyps, exts]) {
    return !hyps.some(abbas) && exts.some(abbas);
  }

  return text
    .trim()
    .split("\n")
    .map(process)
    .map(tls)
    .reduce((a, b) => a + b);
}

export function part2(text) {
  function* abas(ip) {
    for (const [a, b, c] of windowed(ip, 3)) {
      if (a === c && a !== b) {
        yield `${a}${b}`;
      }
    }
  }

  function ssl([hyps, exts]) {
    const inside = new Set();
    for (const hyp of hyps) {
      for (const aba of abas(hyp)) {
        inside.add(aba);
      }
    }

    for (const ext of exts) {
      for (const [a, b] of abas(ext)) {
        const bab = `${b}${a}`;
        if (inside.has(bab)) {
          return true;
        }
      }
    }

    return false;
  }

  return text
    .trim()
    .split("\n")
    .map(process)
    .map(ssl)
    .reduce((a, b) => a + b);
}
