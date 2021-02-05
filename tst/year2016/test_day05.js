import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2016/day05.js";

const text = readFileSync("data/year2016/day05.txt", "utf8");

describe("day05", () => {
  describe("part1", function () {
    this.timeout(100000);

    it.skip("input", () => {
      chai.expect(part1(text)).to.equal("c6697b55");
    });

    it.skip("example", () => {
      chai.expect(part1("abc")).to.equal("18f47a30");
    });

    it("mock 1", () => {
      chai.expect(part1("abc", 4, "0")).to.equal("890c");
    });

    it("mock 2", () => {
      chai.expect(part1("xyz", 2, "00")).to.equal("ee");
    });
  });

  describe("part2", function () {
    this.timeout(100000);

    it.skip("input", () => {
      chai.expect(part2(text)).to.equal("8c35d1ab");
    });

    it.skip("example", () => {
      chai.expect(part2("abc")).to.equal("05ace8e3");
    });

    it("mock 1", () => {
      chai.expect(part2("abc", 4, "0")).to.equal("3010");
    });

    it("mock 2", () => {
      chai.expect(part2("xyz", 2, "00")).to.equal("cd");
    });
  });
});
