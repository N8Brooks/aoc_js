import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day11.js";

const text = readFileSync("data/year2020/day11.txt", "utf8");

const example = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
`;

describe("day11", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(37);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(2178);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal(26);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(1978);
    });
  });
});
