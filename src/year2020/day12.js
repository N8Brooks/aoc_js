import { manhattan, mult } from "../utils/math.js";

const rot = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

export function part1(text) {
  const pos = [0, 0];
  let dir = [1, 0];

  for (const line of text.trim().split("\n")) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        pos[1] += num;
        break;
      case "E":
        pos[0] += num;
        break;
      case "S":
        pos[1] -= num;
        break;
      case "W":
        pos[0] -= num;
        break;
      case "F":
        pos[0] += num * dir[0];
        pos[1] += num * dir[1];
        break;
      case "L":
        dir = mult(dir, rot[4 - ((num / 90) % 4)]);
        break;
      case "R":
        dir = mult(dir, rot[(num / 90) % 4]);
        break;
    }
  }

  return manhattan(pos);
}

export function part2(text) {
  const pos = [0, 0];
  let way = [10, 1];

  for (const line of text.trim().split("\n")) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        way[1] += num;
        break;
      case "E":
        way[0] += num;
        break;
      case "S":
        way[1] -= num;
        break;
      case "W":
        way[0] -= num;
        break;
      case "F":
        pos[0] += num * way[0];
        pos[1] += num * way[1];
        break;
      case "L":
        way = mult(way, rot[4 - ((num / 90) % 4)]);
        break;
      case "R":
        way = mult(way, rot[(num / 90) % 4]);
        break;
    }
  }

  return manhattan(pos);
}
