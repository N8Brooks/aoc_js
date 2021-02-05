import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day03.js";

const text = readFileSync("data/year2020/day03.txt", "utf8");

const example = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`;

describe("day03", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(207);
    });

    it("example", () => {
      chai.expect(part1(example)).to.equal(7);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(2655892800);
    });

    it("example", () => {
      chai.expect(part2(example)).to.equal(336);
    });
  });
});
