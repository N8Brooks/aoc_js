import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day23.js";

const text = readFileSync("data/year2020/day23.txt", "utf8");

describe("day23", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1("389125467", 10)).to.equal("92658374");
    });

    it("example 2", () => {
      chai.expect(part1("389125467")).to.equal("67384529");
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal("32897654");
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2("389125467")).to.equal(149245887792);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(186715244496);
    });
  });
});
