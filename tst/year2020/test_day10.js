import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day10.js";

const text = readFileSync("data/year2020/day10.txt", "utf8");

const example_1 = `16\n10\n15\n5\n1\n11\n7\n19\n6\n12\n4\n`;

const example_2 = `28\n33\n18\n42\n31\n14\n46\n20\n48\n47\n24\n23\n49\n45\n19
38\n39\n11\n1\n32\n25\n35\n8\n17\n7\n9\n4\n2\n34\n10\n3\n`;

describe("day10", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1(example_1)).to.equal(35);
    });

    it("example 2", () => {
      chai.expect(part1(example_2)).to.equal(220);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(2760);
    });
  });

  describe("part2", () => {
    it("example 1", () => {
      chai.expect(part2(example_1)).to.equal(8);
    });

    it("example 2", () => {
      chai.expect(part2(example_2)).to.equal(19208);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(13816758796288);
    });
  });
});
