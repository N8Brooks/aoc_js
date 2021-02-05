import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2016/day07.js";

const text = readFileSync("data/year2016/day07.txt", "utf8");

const example1 = `abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn
`;

const example2 = `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(115);
  });

  it("example1", () => {
    chai.expect(part1(example1)).to.equal(2);
  });

  it("example2", () => {
    chai.expect(part1(example2)).to.equal(0);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(231);
  });

  it("example1", () => {
    chai.expect(part2(example1)).to.equal(0);
  });

  it("example2", () => {
    chai.expect(part2(example2)).to.equal(3);
  });
});
