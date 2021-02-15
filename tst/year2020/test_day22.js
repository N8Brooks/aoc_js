import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day22.js";

const text = readFileSync("data/year2020/day22.txt", "utf8");

const example = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10
`;

describe("day22", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(306);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(32783);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal(291);
    });

    it.skip("input", () => {
      chai.expect(part2(text)).to.equal(33455);
    });
  });
});
