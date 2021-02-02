import chai from "chai";
import { readFileSync } from "fs";
import { lookSay, part1, part2 } from "../../src/year2015/day10.js";

const text = readFileSync("data/year2015/day10.txt", "utf8");

describe("look say", function () {
  it("example 1", () => {
    chai.expect(lookSay("1")).to.equal("11");
  });

  it("example 2", () => {
    chai.expect(lookSay("11")).to.equal("21");
  });

  it("example 3", () => {
    chai.expect(lookSay("21")).to.equal("1211");
  });

  it("example 4", () => {
    chai.expect(lookSay("1211")).to.equal("111221");
  });

  it("example 5", () => {
    chai.expect(lookSay("111221")).to.equal("312211");
  });
});

describe("part1", function () {
  it.skip("input", () => {
    chai.expect(part1(text)).to.equal(252594);
  });

  it("mock 1", () => {
    chai.expect(part1("1234", 10)).to.equal(112);
  });

  it("mock 2", () => {
    chai.expect(part1("121", 20)).to.equal(750);
  });
});

describe("part2", function () {
  it.skip("input", () => {
    chai.expect(part2(text)).to.equal(3579328);
  });

  it("mock 1", () => {
    chai.expect(part2("1", 5)).to.equal(6);
  });

  it("mock 2", () => {
    chai.expect(part2("1", 15)).to.equal(102);
  });
});
