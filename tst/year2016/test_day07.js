// @flow

import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2016/day07.js";

const text = readFileSync("data/year2016/day07.txt", "utf8");

const example_1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn
`;

const example_2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(115);
  });

  it("example_1", () => {
    chai.expect(part1(example_1)).to.equal(2);
  });

  it("example_2", () => {
    chai.expect(part1(example_2)).to.equal(0);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(231);
  });

  it("example_1", () => {
    chai.expect(part2(example_1)).to.equal(0);
  });

  it("example_2", () => {
    chai.expect(part2(example_2)).to.equal(3);
  });
});
