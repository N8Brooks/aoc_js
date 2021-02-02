import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2016/day02.js";

const text = readFileSync("data/year2016/day02.txt", "utf8");

const example = `ULL
RRDDD
LURDL
UUUUD
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal("24862");
  });

  it("example", () => {
    chai.expect(part1(example)).to.equal("1985");
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal("46C91");
  });

  it("example 1", () => {
    chai.expect(part2(example)).to.equal("5DB3");
  });
});
