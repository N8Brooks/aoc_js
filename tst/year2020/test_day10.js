import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day10.js";

const text = readFileSync("data/year2020/day10.txt", "utf8");

const example_1 = `16
10
15
5
1
11
7
19
6
12
4
`;

const example_2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
`;

describe("day09", () => {
  describe("part1", () => {
    it("input", () => {
      chai.expect(part1(text)).to.equal(2760);
    });

    it("example 1", () => {
      chai.expect(part1(example_1)).to.equal(35);
    });

    it("example 2", () => {
      chai.expect(part1(example_2)).to.equal(220);
    });
  });

  describe("part2", () => {
    it("input", () => {
      chai.expect(part2(text)).to.equal(13816758796288);
    });

    it("example 1", () => {
      chai.expect(part2(example_1, 5)).to.equal(8);
    });

    it("example 2", () => {
      chai.expect(part2(example_2, 5)).to.equal(19208);
    });
  });
});
