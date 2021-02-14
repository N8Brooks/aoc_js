import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day21.js";

const text = readFileSync("data/year2020/day21.txt", "utf8");

const example = `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)
`;

describe("day21", () => {
  describe("part1", () => {
    it("example", () => {
      chai.expect(part1(example)).to.equal(5);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(2786);
    });
  });

  describe("part2", () => {
    it("example", () => {
      chai.expect(part2(example)).to.equal("mxmxvkd,sqjhc,fvjkl");
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal("prxmdlz,ncjv,knprxg,lxjtns,vzzz,clg,cxfz,qdfpq");
    });
  });
});
