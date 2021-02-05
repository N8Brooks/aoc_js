import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day01.js";

const text = readFileSync("data/year2020/day01.txt", "utf8");

const example = `1721
979
366
299
675
1456
`;

describe("day01", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(482811);
    });

    it("example", () => {
      chai.expect(part1(example)).to.equal(514579);
    });

    it("error", () => {
      chai.expect(() => part1("")).to.throw(Error);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(193171814);
    });

    it("example", () => {
      chai.expect(part2(example)).to.equal(241861950);
    });

    it("error", () => {
      chai.expect(() => part2("")).to.throw(Error);
    });
  });
});
