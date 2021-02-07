import _ from "lodash";

export function part1(text) {
  const [rules, , nearby] = process(text);
  const valid = validFactory(rules);

  return nearby.reduce((total, ticket) => {
    return total + ticket.reduce((sum, x) => sum + (valid(x).size ? 0 : x), 0);
  }, 0);
}

export function part2(text) {
  const [rules, your, nearby] = process(text);
  const valid = validFactory(rules);

  const fields = nearby
    .filter((ticket) => ticket.every((field) => valid(field).size))
    .map((ticket) => ticket.map(valid));

  const fieldSet = new Set();
  const fieldArr = Array(rules.length);

  _.zip(...fields)
    .map(intersection)
    .map((set, index) => [set, index])
    .sort(([setA], [setB]) => setA.size - setB.size)
    .forEach(addDifferent);

  return fieldArr
    .map((field, index) => [field, index])
    .filter(([field]) => field.startsWith("departure"))
    .reduce((prod, [, index]) => prod * your[index], 1);

  function intersection(sets) {
    return sets.reduce((section, set) => {
      if (section === undefined) {
        return new Set(set);
      }
      section.forEach((field) => !set.has(field) && section.delete(field));
      return section;
    }, undefined);
  }

  function addDifferent([set, index]) {
    for (const field of set) {
      if (!fieldSet.has(field)) {
        fieldArr[index] = field;
        fieldSet.add(field);
        break;
      }
    }
  }
}

function process(text) {
  const [ruleText, yourText, nearbyText] = text.trim().split("\n\n");

  const rules = ruleText.split("\n").map((field) => {
    const [rule, ranges] = field.split(": ");
    return [rule, ranges.split(" or ").map((range) => range.split("-").map(Number))];
  });

  const your = yourText.substr(13).split(",").map(Number);

  const nearby = nearbyText
    .substr(16)
    .split("\n")
    .map((ticket) => ticket.split(",").map(Number));

  return [rules, your, nearby];
}

function validFactory(rules) {
  return _.memoize((x) => {
    return new Set(
      rules
        .filter(([, [[lo1, hi1], [lo2, hi2]]]) => {
          return (lo1 <= x && x <= hi1) || (lo2 <= x && x <= hi2);
        })
        .map(([name]) => name)
    );
  });
}
