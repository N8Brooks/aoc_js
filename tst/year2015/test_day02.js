import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2015/day02.js";

const text = readFileSync("data/year2015/day02.txt", "utf8");

describe("day02", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(1606483);
    });

    it("example 1", () => {
      chai.expect(part1("2x3x4")).to.equal(58);
    });

    it("example 2", () => {
      chai.expect(part1("1x1x10")).to.equal(43);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(3842356);
    });

    it("example 1", () => {
      chai.expect(part2("2x3x4")).to.equal(34);
    });

    it("example 2", () => {
      chai.expect(part2("1x1x10")).to.equal(14);
    });
  });
});
