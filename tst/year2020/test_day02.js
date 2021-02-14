import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day02.js";

const text = readFileSync("data/year2020/day02.txt", "utf8");

const example = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

describe("day02", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(2);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(591);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal(1);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(335);
    });
  });
});
