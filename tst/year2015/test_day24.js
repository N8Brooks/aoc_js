import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2015/day24.js";

const text = readFileSync("data/year2015/day24.txt", "utf8");

describe("day024", () => {
  describe("part1", function () {
    this.timeout(60000);

    it.skip("input", () => {
      chai.expect(part1(text)).to.equal(10439961859);
    });

    it("example", () => {
      chai.expect(part1("1\n2\n3\n4\n5\n7\n8\n9\n10\n11")).to.equal(99);
    });
  });

  describe("part2", function () {
    this.timeout(60000);

    it.skip("input", () => {
      chai.expect(part2(text)).to.equal(72050269);
    });

    it("example", () => {
      chai.expect(part2("1\n2\n3\n4\n5\n7\n8\n9\n10\n11")).to.equal(44);
    });
  });
});
