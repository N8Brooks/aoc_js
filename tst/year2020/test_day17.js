import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day17.js";

const text = readFileSync("data/year2020/day17.txt", "utf8");

const example = `.#.
..#
###
`;

describe("day17", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(112);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(368);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal(848);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(2696);
    });
  });
});
