import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2015/day13.js";

const text = readFileSync("data/year2015/day13.txt", "utf8");

const example = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.
`;

const mock = `Jody would loose 200 happiness units by sitting next to Carol.
Jody would loose 100 happiness units by sitting next to Irwin.
Jody would loose 1000 happiness units by sitting next to Aligator.
Carol would loose 42 happiness units by sitting next to Jody.
Carol would gain 512 happiness units by sitting next to Irwin.
Carol would loose 300 happiness units by sitting next to Aligator.
Irwin would loose 30 happiness units by sitting next to Jody.
Irwin would gain 101 happiness units by sitting next to Carol.
Irwin would gain 499 happiness units by sitting next to Aligator.
Aligator would gain 999 happiness units by sitting next to Jody.
Aligator would gain 1500 happiness units by sitting next to Carol.
Aligator would loose 360 happiness units by sitting next to Irwin.
`;

describe("part1", function () {
  it("input", () => {
    chai.expect(part1(text)).to.equal(709);
  });

  it("example", () => {
    chai.expect(part1(example)).to.equal(330);
  });

  it("mock", () => {
    chai.expect(part1(mock)).to.equal(1682);
  });
});

describe("part2", function () {
  it("input", () => {
    chai.expect(part2(text)).to.equal(668);
  });

  it("example", () => {
    chai.expect(part2(example)).to.equal(286);
  });

  it("mock", () => {
    chai.expect(part2(mock)).to.equal(1812);
  });
});
