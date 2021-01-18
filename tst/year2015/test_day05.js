import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2015/day05.js";

const text = readFileSync("data/year2015/day05.txt", "utf8");

describe("part1", function () {
  it("input", () => {
    chai.expect(part1(text)).to.equal(238);
  });

  it("example 1", () => {
    chai.expect(part1("ugknbfddgicrmopn")).to.equal(1);
  });

  it("example 2", () => {
    chai.expect(part1("aaa")).to.equal(1);
  });

  it("mock 1", () => {
    chai.expect(part1("jchzalrnumimnmhp")).to.equal(0);
  });

  it("mock 2", () => {
    chai.expect(part1("haegwjzuvuyypxyu")).to.equal(0);
  });

  it("mock 3", () => {
    chai.expect(part1("dvszwmarrgswjxmb")).to.equal(0);
  });
});

describe("part2", function () {
  it("input", () => {
    chai.expect(part2(text)).to.equal(69);
  });

  it("example 1", () => {
    chai.expect(part2("qjhvhtzxzqqjkmpb")).to.equal(1);
  });

  it("example 2", () => {
    chai.expect(part2("xxyxx")).to.equal(1);
  });

  it("example 3", () => {
    chai.expect(part2("uurcxstgmygtbstg")).to.equal(0);
  });

  it("example 4", () => {
    chai.expect(part2("ieodomkazucvgmuy")).to.equal(0);
  });
});
