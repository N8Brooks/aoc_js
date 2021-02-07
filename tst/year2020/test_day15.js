import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day15.js";

const text = readFileSync("data/year2020/day15.txt", "utf8");

describe("day15", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(1111);
    });

    it("example 1", () => {
      chai.expect(part1("0,3,6")).to.equal(436);
    });

    it("example 2", () => {
      chai.expect(part1("1,3,2")).to.equal(1);
    });

    it("example 3", () => {
      chai.expect(part1("2,1,3")).to.equal(10);
    });

    it("example 4", () => {
      chai.expect(part1("1,2,3")).to.equal(27);
    });

    it("example 5", () => {
      chai.expect(part1("2,3,1")).to.equal(78);
    });

    it("example 6", () => {
      chai.expect(part1("3,2,1")).to.equal(438);
    });

    it("example 7", () => {
      chai.expect(part1("3,1,2")).to.equal(1836);
    });
  });

  describe("part2", () => {
    it.skip("input", () => {
      chai.expect(part2(text)).to.equal(48568);
    });

    it.skip("example 1", () => {
      chai.expect(part2("0,3,6")).to.equal(175594);
    });

    it.skip("example 2", () => {
      chai.expect(part2("1,3,2")).to.equal(2578);
    });

    it.skip("example 3", () => {
      chai.expect(part2("2,1,3")).to.equal(3544142);
    });

    it.skip("example 4", () => {
      chai.expect(part2("1,2,3")).to.equal(261214);
    });

    it.skip("example 5", () => {
      chai.expect(part2("2,3,1")).to.equal(6895259);
    });

    it.skip("example 6", () => {
      chai.expect(part2("3,2,1")).to.equal(18);
    });

    it.skip("example 7", () => {
      chai.expect(part2("3,1,2")).to.equal(362);
    });

    it("mock 1", () => {
      chai.expect(part2("0,3,6", 30)).to.equal(3);
    });

    it("mock 2", () => {
      chai.expect(part2("1,3,2", 30)).to.equal(9);
    });

    it("mock 3", () => {
      chai.expect(part2("2,1,3", 30)).to.equal(5);
    });

    it("mock 4", () => {
      chai.expect(part2("1,2,3", 30)).to.equal(3);
    });

    it("mock 5", () => {
      chai.expect(part2("2,3,1", 30)).to.equal(3);
    });

    it("mock 6", () => {
      chai.expect(part2("3,2,1", 30)).to.equal(0);
    });

    it("mock 7", () => {
      chai.expect(part2("3,1,2", 30)).to.equal(0);
    });
  });
});
