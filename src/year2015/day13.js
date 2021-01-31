import _ from "lodash";

export function part1(text) {
  return family(text);
}

export function part2(text) {
  return family(text, true);
}

function family(text, buffer = false) {
  const individuals = new Map();
  const pairs = new Map();
  const pattern = /(\w+) would (\w+) (\d+) happiness units by sitting next to (\w+)./;

  for (const line of text.trim().split("\n")) {
    const [, aName, sign, val, bName] = pattern.exec(line);
    const a = defaultIndividual(aName);
    const b = defaultIndividual(bName);
    const pair = (1 << a) | (1 << b);
    pairs.set(pair, (pairs.get(pair) ?? 0) + (sign === "gain" ? +val : -val));
  }

  const n = individuals.size + buffer;
  const memo = new Map();

  return happiness(0, 1);

  function defaultIndividual(individual) {
    const index = individuals.get(individual) ?? individuals.size;
    individuals.set(individual, index);
    return index;
  }

  function happiness(i, s) {
    const key = `${i},${s}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    if (s === (1 << n) - 1) {
      return pairs.get(1 | (1 << i)) ?? 0;
    }

    const max = Math.max(
      ..._.range(n)
        .filter((j) => (s & (1 << j)) === 0)
        .map((j) => (pairs.get((1 << i) | (1 << j)) ?? 0) + happiness(j, s | (1 << j)))
    );

    memo.set(key, max);

    return max;
  }
}
