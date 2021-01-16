import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2016/day06.js";

const text = readFileSync("data/year2016/day06.txt", "utf8");

const example = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal("gyvwpxaz");
  });

  it("example", () => {
    chai.expect(part1(example)).to.equal("easter");
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal("jucfoary");
  });

  it("example", () => {
    chai.expect(part2(example)).to.equal("advent");
  });
});
