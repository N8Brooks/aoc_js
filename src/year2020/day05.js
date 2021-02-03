export function part1(text) {
  return Math.max(...text.trim().split("\n").map(seat));
}

export function part2(text) {
  const seats = new Set(text.trim().split("\n").map(seat));

  for (let i = Math.min(...seats) + 1, size = seats.size; i < size; i++) {
    if (!seats.has(i)) {
      return i;
    }
  }
}

function seat(pass) {
  return parseInt(
    pass.replace(/./g, (c) => (c === "B" ? "1" : c === "R" ? "1" : "0")),
    2
  );
}
