import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2019/day03.js";

const text = readFileSync("data/year2019/day03.txt", "utf8");

const example1 = `R8,U5,L5,D3
U7,R6,D4,L4`;

const example2 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;

const example3 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

describe("day03", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1(example1)).to.equal(6);
    });

    it("example 2", () => {
      chai.expect(part1(example2)).to.equal(159);
    });

    it("example 3", () => {
      chai.expect(part1(example3)).to.equal(135);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(1674);
    });
  });

  describe("part2", () => {
    it("example 1", () => {
      chai.expect(part2(example1)).to.equal(30);
    });

    it("example 2", () => {
      chai.expect(part2(example2)).to.equal(610);
    });

    it("example 3", () => {
      chai.expect(part2(example3)).to.equal(410);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(14012);
    });
  });
});
