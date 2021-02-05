export function part1(text) {
  return text
    .trim()
    .split("\n\n")
    .reduce((sum, group) => {
      return sum + new Set(group.match(/\w/g)).size;
    }, 0);
}

export function part2(text) {
  return text
    .trim()
    .split("\n\n")
    .reduce((sum, group) => {
      let running;
      for (const line of group.split("\n")) {
        running = running ? new Set(line.split("").filter((c) => running.has(c))) : new Set(line);
      }
      return sum + running.size;
    }, 0);
}
