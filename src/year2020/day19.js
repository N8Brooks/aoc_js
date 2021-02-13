import _ from "lodash";

const update = [
  ["8", "42 | 42 8"],
  ["11", "42 31 | 42 11 31"],
];

export function part1(text) {
  const [raw, messages] = text.trim().split("\n\n");
  const rules = new Map(raw.split("\n").map((line) => line.split(": ")));

  return process(rules, messages);
}

export function part2(text) {
  const [raw, messages] = text.trim().split("\n\n");
  const rules = new Map(raw.split("\n").map((line) => line.split(": ")));
  update.forEach(([key, val]) => rules.set(key, val));

  return process(rules, messages);
}

function process(rules, messages) {
  const getRule = _.memoize((index, count) => {
    const rule = rules.get(index);
    if (rule.startsWith('"')) {
      return rule.slice(1, -1);
    } else if (count === 10) {
      return "";
    }

    return `(?:${rule
      .split(" | ")
      .map((sub) =>
        sub
          .split(" ")
          .map((i) => getRule(i, count + 1))
          .join("")
      )
      .join("|")})`;
  });

  const pattern = new RegExp(`^${getRule("0", 0)}$`);

  return messages.split("\n").reduce((sum, line) => sum + Boolean(line.match(pattern)), 0);
}
