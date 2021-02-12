import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day18.js";

const text = readFileSync("data/year2020/day18.txt", "utf8");

describe("day18", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(8929569623593);
    });

    it("example 1", () => {
      chai.expect(part1("1 + 2 * 3 + 4 * 5 + 6")).to.equal(71);
    });

    it("example 2", () => {
      chai.expect(part1("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example 3", () => {
      chai.expect(part1("2 * 3 + (4 * 5)")).to.equal(26);
    });

    it("example 4", () => {
      chai.expect(part1("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(437);
    });

    it("example 5", () => {
      chai.expect(part1("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(12240);
    });

    it("example 6", () => {
      chai.expect(part1("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")).to.equal(13632);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(231235959382961);
    });

    it("example 1", () => {
      chai.expect(part2("1 + 2 * 3 + 4 * 5 + 6")).to.equal(231);
    });

    it("example 2", () => {
      chai.expect(part2("1 + (2 * 3) + (4 * (5 + 6))")).to.equal(51);
    });

    it("example 3", () => {
      chai.expect(part2("2 * 3 + (4 * 5)")).to.equal(46);
    });

    it("example 4", () => {
      chai.expect(part2("5 + (8 * 3 + 9 + 3 * 4 * 3)")).to.equal(1445);
    });

    it("example 5", () => {
      chai.expect(part2("5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))")).to.equal(669060);
    });

    it("example 6", () => {
      chai.expect(part2("((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2")).to.equal(23340);
    });
  });
});
