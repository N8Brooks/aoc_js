import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2015/day04.js";

const text = readFileSync("data/year2015/day04.txt", "utf8");

describe("part1", function () {
  this.timeout(60000);

  it.skip("input", () => {
    chai.expect(part1(text)).to.equal(346386);
  });

  it.skip("example 1", () => {
    chai.expect(part1("abcdef")).to.equal(609043);
  });

  it.skip("example 2", () => {
    chai.expect(part1("pqrstuv")).to.equal(1048970);
  });

  it("mock 1", () => {
    chai.expect(part1("abc", "0")).to.equal(5);
  });

  it("mock 2", () => {
    chai.expect(part1("leet", "00")).to.equal(498);
  });

  it("mock 3", () => {
    chai.expect(part1("abcde", "000")).to.equal(3452);
  });
});

describe("part2", function () {
  this.timeout(60000);

  it.skip("input", () => {
    chai.expect(part2(text)).to.equal(9958218);
  });

  it.skip("example 1", () => {
    chai.expect(part2("abcdef")).to.equal(6742839);
  });

  it.skip("example 2", () => {
    chai.expect(part2("pqrstuv")).to.equal(5714438);
  });

  it("mock 1", () => {
    chai.expect(part2("123", "0")).to.equal(10);
  });

  it("mock 2", () => {
    chai.expect(part2("panda", "00")).to.equal(107);
  });

  it("mock 3", () => {
    chai.expect(part2("giraff", "000")).to.equal(1803);
  });
});
