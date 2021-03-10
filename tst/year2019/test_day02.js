import chai from "chai";
import { readFileSync } from "fs";
import { computer, part1, part2 } from "../../src/year2019/day02.js";

const text = readFileSync("data/year2019/day02.txt", "utf8");

describe("day02", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(3760627);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(7195);
    });
  });

  describe("computer", () => {
    it("example 1", () => {
      chai.expect(computer([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])).to.equal(3500);
    });

    it("example 2", () => {
      chai.expect(computer([1, 0, 0, 0, 99])).to.equal(2);
    });

    it("example 3", () => {
      chai.expect(computer([2, 3, 0, 3, 99])).to.equal(2);
    });

    it("example 4", () => {
      chai.expect(computer([2, 4, 4, 5, 99, 0])).to.equal(2);
    });

    it("example 5", () => {
      chai.expect(computer([1, 1, 1, 4, 99, 5, 6, 0, 99])).to.equal(30);
    });
  });
});
