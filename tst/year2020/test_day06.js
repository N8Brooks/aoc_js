import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day06.js";

const text = readFileSync("data/year2020/day06.txt", "utf8");

const example_1 = `abcx
abcy
abcz
`;

const example_2 = `abc

a
b
c

ab
ac

a
a
a
a

b
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(6532);
  });

  it("example 1", () => {
    chai.expect(part1(example_1)).to.equal(6);
  });

  it("example 2", () => {
    chai.expect(part1(example_2)).to.equal(11);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(3427);
  });

  it("example 1", () => {
    chai.expect(part2(example_1)).to.equal(3);
  });

  it("example 2", () => {
    chai.expect(part2(example_2)).to.equal(6);
  });
});
