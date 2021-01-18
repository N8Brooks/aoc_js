export function part1(text) {
  const queue = [JSON.parse(text)];
  let total = 0;

  while (queue.length) {
    const node = queue.pop();

    if (Number.isInteger(node)) {
      total += node;
    } else if (Array.isArray(node)) {
      queue.push(...node);
    } else if (node instanceof Object) {
      queue.push(...Object.values(node));
    }
  }

  return total;
}

export function part2(text) {
  const queue = [JSON.parse(text)];
  let total = 0;

  while (queue.length) {
    const node = queue.pop();

    if (Number.isInteger(node)) {
      total += node;
    } else if (Array.isArray(node)) {
      queue.push(...node);
    } else if (node instanceof Object && !Object.values(node).includes("red")) {
      queue.push(...Object.values(node));
    }
  }

  return total;
}
