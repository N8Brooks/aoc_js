import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day13.js";

const text = readFileSync("data/year2020/day13.txt", "utf8");

const example = `939
7,13,x,x,59,x,31,19
`;

describe("day13", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(4722);
    });

    it("example", () => {
      chai.expect(part1(example)).to.equal(295);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(825305207525452);
    });

    it("example", () => {
      chai.expect(part2(example, 5)).to.equal(1068781);
    });
  });
});
