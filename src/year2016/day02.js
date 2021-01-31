import { add } from "../utils/math.js";

const dirs = {
  L: [-1, 0],
  U: [0, 1],
  R: [1, 0],
  D: [0, -1],
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
    return (keys.has(`${nxt[0]},${nxt[1]}`) && nxt) || cur;
  }

  function row(loc, moves) {
    return moves.split("").reduce(act, loc);
  }

  const accumulate = ((sum) => (value) => (sum = row(sum, value)))(start);

  const keycode = text.trim().split("\n").map(accumulate);

  return keycode.map((key) => keys.get(`${key[0]},${key[1]}`)).join("");
}

export function part1(text, initial = [0, 0]) {
  return simulate(text, keypad_a, initial);
}

export function part2(text, initial = [-2, 0]) {
  return simulate(text, keypad_b, initial);
}
