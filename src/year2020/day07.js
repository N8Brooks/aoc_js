import _ from "lodash";

export function part1(text, target = "shiny gold") {
  const graph = process(text);

  const contains = _.memoize(
    (bag) => bag === target || graph.get(bag)?.some(([, bag]) => contains(bag)) || false
  );

  return Array.from(graph.keys()).reduce((sum, bag) => sum + (bag !== target && contains(bag)), 0);
}

export function part2(text, target = "shiny gold") {
  const graph = process(text);

  const members = _.memoize((bag) =>
    graph.get(bag)?.reduce((sum, [count, bag]) => sum + count * (members(bag) + 1), 0)
  );

  return members(target);
}

function process(text) {
  const graph = new Map();

  for (const line of text.trim().split("\n")) {
    const [parent, elements] = line.split(" bags contain ");
    graph.set(
      parent,
      Array.from(elements.matchAll(/(\d+) (.+?) bags?/g)).map((value) => [+value[1], value[2]])
    );
  }

  return graph;
}
