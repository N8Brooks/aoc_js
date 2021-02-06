import { manhattan, mult } from "../utils/math.js";

const rotations = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

export function part1(text) {
  let direction = [1, 0];

  return manhattan(text.trim().split("\n").reduce(move, [0, 0]));

  function move([posX, posY], line) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        return [posX, num + posY];
      case "E":
        return [num + posX, posY];
      case "S":
        return [posX, -num + posY];
      case "W":
        return [-num + posX, posY];
      case "F":
        return [num * direction[0] + posX, num * direction[1] + posY];
      case "L":
        direction = mult(direction, rotations[rotations.length - ((num / 90) % 4)]);
        return [posX, posY];
      case "R":
        direction = mult(direction, rotations[(num / 90) % 4]);
        return [posX, posY];
    }
  }
}

export function part2(text) {
  let waypoint = [10, 1];

  return manhattan(text.trim().split("\n").reduce(move, [0, 0]));

  function move(pos, line) {
    const num = +line.slice(1);
    switch (line[0]) {
      case "N":
        waypoint = [waypoint[0], waypoint[1] + num];
        break;
      case "E":
        waypoint = [num + waypoint[0], waypoint[1]];
        break;
      case "S":
        waypoint = [waypoint[0], -num + waypoint[1]];
        break;
      case "W":
        waypoint = [-num + waypoint[0], waypoint[1]];
        break;
      case "F":
        return [pos[0] + num * waypoint[0], pos[1] + num * waypoint[1]];
      case "L":
        waypoint = mult(waypoint, rotations[rotations.length - ((num / 90) % 4)]);
        break;
      case "R":
        waypoint = mult(waypoint, rotations[(num / 90) % 4]);
        break;
    }

    return pos;
  }
}
