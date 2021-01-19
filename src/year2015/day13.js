import { Permutation } from "js-combinatorics/commonjs/combinatorics.js";

class Family {
  constructor(text) {
    const r = /(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)\./;
    this.pairs = new Map();
    this.individuals = new Set();

    for (const line of text.trim().split("\n")) {
      const [, a, sign, value, b] = r.exec(line);
      const key = [a, b].sort().join("-");
      this.pairs.set(
        key,
        (this.pairs.get(key) || 0) + (sign === "gain" ? +value : -value)
      );
      this.individuals.add(a);
      this.individuals.add(b);
    }
  }

  happiness(order) {
    let res = 0;
    let a = order[order.length - 1];
    for (const b of order) {
      res += this.pairs.get([a, b].sort().join("-"));
      a = b;
    }
    return res;
  }

  maximum() {
    let res = -Infinity;
    for (const perm of new Permutation(this.individuals)) {
      res = Math.max(res, this.happiness(perm));
    }
    return res;
  }
}

export function part1(text) {
  return new Family(text).maximum();
}

export function part2(text) {
  const family = new Family(text);
  for (const individual of family.individuals) {
    family.pairs.set([individual, "Santa's helper"].sort().join("-"), 0);
  }
  family.individuals.add("Santa's helper");
  return family.maximum();
}
