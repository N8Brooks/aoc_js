import chai from "chai";
import { readFileSync } from "fs";
import { part1, part2 } from "../../src/year2020/day24.js";

const text = readFileSync("data/year2020/day24.txt", "utf8");

const example4 = `sesenwnenenewseeswwswswwnenewsewsw
neeenesenwnwwswnenewnwwsewnenwseswesw
seswneswswsenwwnwse
nwnwneseeswswnenewneswwnewseswneseene
swweswneswnenwsewnwneneseenw
eesenwseswswnenwswnwnwsewwnwsene
sewnenenenesenwsewnenwwwse
wenwwweseeeweswwwnwwe
wsweesenenewnwwnwsenewsenwwsesesenwne
neeswseenwwswnwswswnw
nenwswwsewswnenenewsenwsenwnesesenew
enewnwewneswsewnwswenweswnenwsenwsw
sweneswneswneneenwnewenewwneswswnese
swwesenesewenwneswnwwneseswwne
enesenwswwswneneswsenwnewswseenwsese
wnwnesenesenenwwnenwsewesewsesesew
nenewswnwewswnenesenwnesewesw
eneswnwswnwsenenwnwnwwseeswneewsenese
neswnwewnwnwseenwseesewsenwsweewe
wseweeenwnesenwwwswnew
`;

describe("day24", () => {
  describe("part1", () => {
    it("example 1", () => {
      chai.expect(part1("esenee")).to.equal(1);
    });

    it("example 2", () => {
      chai.expect(part1("esew")).to.equal(1);
    });

    it("example 3", () => {
      chai.expect(part1("nwwswee")).to.equal(1);
    });

    it("example 4", () => {
      chai.expect(part1(example4)).to.equal(10);
    });

    it("input", () => {
      chai.expect(part1(text)).to.equal(332);
    });
  });

  describe("part2", () => {
    it("example 1", () => {
      chai.expect(part2("esenee")).to.equal(0);
    });

    it("example 2", () => {
      chai.expect(part2("esew")).to.equal(0);
    });

    it("example 3", () => {
      chai.expect(part2("nwwswee")).to.equal(0);
    });

    it("example 4", () => {
      chai.expect(part2(example4)).to.equal(2208);
    });

    it("input", () => {
      chai.expect(part2(text)).to.equal(3900);
    });
  });
});
