import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day08.js";

const text = readFileSync("data/year2020/day08.txt", "utf8");

const example = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`;

describe("day08", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(5);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(1766);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal(8);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(1639);
    });
  });
});
