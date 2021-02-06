import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day12.js";

const text = readFileSync("data/year2020/day12.txt", "utf8");

const example = `F10
N3
F7
R90
F11
`;

describe("day12", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(2847);
    });

    it("example", () => {
      chai.expect(part1(example)).to.equal(25);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(29839);
    });

    it("example", () => {
      chai.expect(part2(example, 5)).to.equal(286);
    });
  });
});
