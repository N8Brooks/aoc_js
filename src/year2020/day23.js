import _ from "lodash";

export function part1(text, moves = 100) {
  const cups = text.trim().split("").map(Number);
  return Array.from(game(cups, moves, 9)).join("");
}

export function part2(text, moves = 10_000_000) {
  const cups = text.trim().split("").map(Number);
  for (let i = 10; i <= 1_000_000; i++) cups.push(i);
  const order = game(cups, moves, 1_000_000);

  return order.next().value * order.next().value;
}

function* game(cups, moves, last) {
  const next = _.range(1, cups.length + 1);
  let cup = cups[0];

  for (const label of cups.reverse()) {
    next[label] = cup;
    cup = label;
  }

  for (let i = 0; i < moves; i++) {
    const one = next[cup];
    const two = next[one];
    const tri = next[two];
    next[cup] = next[tri];

    let dest = cup;
    do {
      dest = dest > 1 ? dest - 1 : last;
    } while (dest === one || dest === two || dest === tri);

    [next[dest], next[tri]] = [one, next[dest]];
    cup = next[cup];
  }

  cup = next[1];
  while (cup !== 1) {
    yield cup;
    cup = next[cup];
  }
}
