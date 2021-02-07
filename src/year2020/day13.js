export function part1(text) {
  const [notes, schedule] = text.trim().split("\n");
  const timeZero = +notes;

  let minBus = 0;
  let minTime = Infinity;

  schedule
    .split(",")
    .filter((bus) => bus !== "x")
    .map(Number)
    .forEach((bus) => {
      const time = (((bus - timeZero) % bus) + bus) % bus;
      if (time < minTime) {
        minBus = bus;
        minTime = time;
      }
    });

  return minBus * minTime;
}

export function part2(text) {
  let time = 0;
  let lcm = 1;

  text
    .split("\n")[1]
    .split(",")
    .map((bus, i) => [parseInt(bus), i])
    .filter(([bus]) => !isNaN(bus))
    .forEach(([bus, i]) => {
      time += ((-(time + i) * modularInverse(lcm, bus)) % bus) * lcm;
      lcm *= bus;
    });

  return time;

  function modularInverse(n, m) {
    for (let r = 1; r < m; r++) {
      if ((n * r) % m === 1) {
        return r;
      }
    }
  }
}
