import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2016/day01.js";

const text = readFileSync("data/year2016/day01.txt", "utf8");

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(161);
  });

  it("example 1", () => {
    chai.expect(part1("R2, L3")).to.equal(5);
  });

  it("example 2", () => {
    chai.expect(part1("R2, R2, R2")).to.equal(2);
  });

  it("example 3", () => {
    chai.expect(part1("R5, L5, R5, R3")).to.equal(12);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(110);
  });

  it("example 1", () => {
    chai.expect(part2("R8, R4, R4, R8")).to.equal(4);
  });
});
