import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day07.js";

const text = readFileSync("data/year2020/day07.txt", "utf8");

const example_1 = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
`;

const example_2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.
`;

describe("part1", () => {
  it("input", () => {
    chai.expect(part1(text)).to.equal(205);
  });

  it("example 1", () => {
    chai.expect(part1(example_1)).to.equal(4);
  });

  it("example 2", () => {
    chai.expect(part1(example_2)).to.equal(0);
  });
});

describe("part2", () => {
  it("input", () => {
    chai.expect(part2(text)).to.equal(80902);
  });

  it("example 1", () => {
    chai.expect(part2(example_1)).to.equal(32);
  });

  it("example 2", () => {
    chai.expect(part2(example_2)).to.equal(126);
  });
});
