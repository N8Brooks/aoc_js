import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2015/day03.js";

const text = readFileSync("data/year2015/day03.txt", "utf8");

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(2081);
  });

  it("example 1", () => {
    chai.expect(part1(">")).to.equal(2);
  });

  it("example 2", () => {
    chai.expect(part1("^>v<")).to.equal(4);
  });

  it("example 3", () => {
    chai.expect(part1("^v^v^v^v^v")).to.equal(2);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(2341);
  });

  it("example 1", () => {
    chai.expect(part2(">v")).to.equal(3);
  });

  it("example 2", () => {
    chai.expect(part2("^>v<")).to.equal(3);
  });

  it("example 3", () => {
    chai.expect(part2("^v^v^v^v^v")).to.equal(11);
  });
});
