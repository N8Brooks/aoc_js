import chai from "chai";
import { readFileSync } from "fs";
import { part1 } from "../../src/year2020/day25.js";

const text = readFileSync("data/year2020/day25.txt", "utf8");

const example = `5764801
17807724
`;

describe("day25", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(14897079);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(9177528);
    });

    it("error", () => {
      chai.expect(() => part1("-1\n-1")).to.throw(Error);
    });
  });
});
