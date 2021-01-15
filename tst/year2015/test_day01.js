import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2015/day01.js";

const text = readFileSync("data/year2015/day01.txt", "utf8");

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(232);
  });

  it("example 1", () => {
    chai.expect(part1("(())")).to.equal(0);
  });

  it("example 2", () => {
    chai.expect(part1("()()")).to.equal(0);
  });

  it("example 3", () => {
    chai.expect(part1("(((")).to.equal(3);
  });

  it("example 4", () => {
    chai.expect(part1("(()(()(")).to.equal(3);
  });

  it("example 5", () => {
    chai.expect(part1("))(((((")).to.equal(3);
  });

  it("example 6", () => {
    chai.expect(part1("())")).to.equal(-1);
  });

  it("example 7", () => {
    chai.expect(part1("))(")).to.equal(-1);
  });

  it("example 8", () => {
    chai.expect(part1(")))")).to.equal(-3);
  });

  it("example 9", () => {
    chai.expect(part1(")())())")).to.equal(-3);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(1783);
  });

  it("example 1", () => {
    chai.expect(part2(")")).to.equal(1);
  });

  it("example 2", () => {
    chai.expect(part2("()())")).to.equal(5);
  });
});
