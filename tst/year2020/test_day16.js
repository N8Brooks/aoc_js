import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day16.js";

const text = readFileSync("data/year2020/day16.txt", "utf8");

const example1 = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12
`;

const example2 = `class: 0-1 or 4-19
row: 0-5 or 8-19
seat: 0-13 or 16-19

your ticket:
11,12,13

nearby tickets:
3,9,18
15,1,5
5,14,9
`;

describe("day16", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1(example1)).to.equal(71);
    });

    it("example 2", () => {
      chai.expect(part2(example2)).to.equal(1);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(32842);
    });
  });

  describe("part2", () => {
    it("example 1", () => {
      chai.expect(part2(example1)).to.equal(1);
    });

    it("example 2", () => {
      chai.expect(part2(example2)).to.equal(1);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(2628667251989);
    });
  });
});
