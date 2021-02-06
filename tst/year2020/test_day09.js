import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day09.js";

const text = readFileSync("data/year2020/day09.txt", "utf8");

const example = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576
`;

describe("day09", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(22477624);
    });

    it("example", () => {
      chai.expect(part1(example, 5)).to.equal(127);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(2980044);
    });

    it("example", () => {
      chai.expect(part2(example, 5)).to.equal(62);
    });
  });
});
