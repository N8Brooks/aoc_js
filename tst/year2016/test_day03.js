// @flow

import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2016/day03.js";

const text = readFileSync("data/year2016/day03.txt", "utf8");

const example = `101 301 501
102 302 502s
103 303 503
201 401 601
202 402 602
203 403 603
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(869);
  });

  it("example 1", () => {
    chai.expect(part1("5 10 25")).to.equal(0);
  });

  it("example 2", () => {
    chai.expect(part1(example)).to.equal(3);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(1544);
  });

  it("example 1", () => {
    chai.expect(part2("5 10 25")).to.equal(0);
  });

  it("example 2", () => {
    chai.expect(part2(example)).to.equal(6);
  });
});
