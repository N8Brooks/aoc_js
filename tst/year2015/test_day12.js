import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2015/day12.js";

const text = readFileSync("data/year2015/day12.txt", "utf8");

describe("day12", () => {
  describe("part1", function () {
    it("input", () => {
      chai.expect(part1(text)).to.equal(191164);
    });

    it("example 1", () => {
      chai.expect(part1("[1,2,3]")).to.equal(6);
    });

    it("example 2", () => {
      chai.expect(part1('{"a":2,"b":4}')).to.equal(6);
    });

    it("example 3", () => {
      chai.expect(part1("[[[3]]]")).to.equal(3);
    });

    it("example 4", () => {
      chai.expect(part1('{"a":{"b":4},"c":-1}')).to.equal(3);
    });

    it("example 5", () => {
      chai.expect(part1('{"a":[-1,1]}')).to.equal(0);
    });

    it("example 6", () => {
      chai.expect(part1('[-1,{"a":1}]')).to.equal(0);
    });

    it("example 7", () => {
      chai.expect(part1("[]")).to.equal(0);
    });

    it("example 8", () => {
      chai.expect(part1("{}")).to.equal(0);
    });
  });

  describe("part2", function () {
    it("input", () => {
      chai.expect(part2(text)).to.equal(87842);
    });

    it("example 1", () => {
      chai.expect(part2("[1,2,3]")).to.equal(6);
    });

    it("example 2", () => {
      chai.expect(part2('[1,{"c":"red","b":2},3]')).to.equal(4);
    });

    it("example 3", () => {
      chai.expect(part2('{"d":"red","e":[1,2,3,4],"f":5}')).to.equal(0);
    });

    it("example 4", () => {
      chai.expect(part2('[1,"red",5]')).to.equal(6);
    });
  });
});
