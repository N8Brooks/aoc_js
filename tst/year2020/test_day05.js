import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day05.js";

const text = readFileSync("data/year2020/day05.txt", "utf8");

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(953);
  });

  it("example 1", () => {
    chai.expect(part1("FBFBBFFRLR")).to.equal(357);
  });

  it("example 2", () => {
    chai.expect(part1("BFFFBBFRRR")).to.equal(567);
  });

  it("example 3", () => {
    chai.expect(part1("FFFBBBFRRR")).to.equal(119);
  });

  it("example 4", () => {
    chai.expect(part1("BBFFBBFRLL")).to.equal(820);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(615);
  });
});
