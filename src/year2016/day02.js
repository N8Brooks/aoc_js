import { add, complex } from "mathjs";

const dirs = {
  L: complex(-1, 0),
  U: complex(0, 1),
  R: complex(1, 0),
  D: complex(0, -1),
};

const keypad_a = new Map([
  ["-1,1", "1"],
  ["0,1", "2"],
  ["1,1", "3"],
  ["-1,0", "4"],
  ["0,0", "5"],
  ["1,0", "6"],
  ["-1,-1", "7"],
  ["0,-1", "8"],
  ["1,-1", "9"],
]);

const keypad_b = new Map([
  ["0,2", "1"],
  ["-1,1", "2"],
  ["0,1", "3"],
  ["1,1", "4"],
  ["-2,0", "5"],
  ["-1,0", "6"],
  ["0,0", "7"],
  ["1,0", "8"],
  ["2,0", "9"],
  ["-1,-1", "A"],
  ["0,-1", "B"],
  ["1,-1", "C"],
  ["0,-2", "D"],
]);

function simulate(text, keys, start) {
  function act(cur, move) {
    const nxt = add(cur, dirs[move]);
    return (keys.has(`${nxt.re},${nxt.im}`) && nxt) || cur;
  }

  function row(loc, moves) {
    return moves.split("").reduce(act, loc);
  }

  const accumulate = ((sum) => (value) => (sum = row(sum, value)))(start);

  const keycode = text.trim().split("\n").map(accumulate);

  return keycode.map((key) => keys.get(`${key.re},${key.im}`)).join("");
}

export function part1(text, initial = complex(0, 0)) {
  return simulate(text, keypad_a, initial);
}

export function part2(text, initial = complex(-2, 0)) {
  return simulate(text, keypad_b, initial);
}
