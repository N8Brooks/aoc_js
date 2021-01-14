// @flow

import chai from "chai";
import { readFileSync } from "fs";

import { part1, part2 } from "../../src/year2016/day04.js";

const text = readFileSync("data/year2016/day04.txt", "utf8");

const example_1 = `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]
`;

const example_2 = `qzmt-zixmtkozy-ivhz-343[zimth]
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(361724);
  });

  it("example 1", () => {
    chai.expect(part1(example_1)).to.equal(1514);
  });

  it("example 2", () => {
    chai.expect(part1(example_2)).to.equal(343);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(482);
  });

  it("example 1", () => {
    chai.expect(part2(example_1, "z a b c d e f g")).to.equal(987);
  });

  it("example 2", () => {
    chai.expect(part2(example_2, "very encrypted name")).to.equal(343);
  });
});
