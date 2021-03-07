import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2019/day01.js";

const text = readFileSync("data/year2019/day01.txt", "utf8");

describe("day01", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1("12")).to.equal(2);
    });

    it("example 2", () => {
      chai.expect(part1("14")).to.equal(2);
    });

    it("example 3", () => {
      chai.expect(part1("1969")).to.equal(654);
    });

    it("example 4", () => {
      chai.expect(part1("100756")).to.equal(33583);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(3408471);
    });
  });

  describe("part2", () => {
    it("example 1", () => {
      chai.expect(part2("12")).to.equal(2);
    });

    it("example 2", () => {
      chai.expect(part2("14")).to.equal(2);
    });

    it("example 3", () => {
      chai.expect(part2("1969")).to.equal(966);
    });

    it("example 4", () => {
      chai.expect(part2("100756")).to.equal(50346);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(5109803);
    });
  });
});
