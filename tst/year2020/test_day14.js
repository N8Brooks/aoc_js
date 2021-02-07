import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day14.js";

const text = readFileSync("data/year2020/day14.txt", "utf8");

const example1 = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0
`;

const example2 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1
`;

describe("day14", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(14722016054794);
    });

    it("example", () => {
      chai.expect(part1(example1)).to.equal(165);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(3618217244644);
    });

    it("example", () => {
      chai.expect(part2(example2)).to.equal(208);
    });
  });
});
