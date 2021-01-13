import {zip, chunk} from "lodash";
import {readFileSync} from "fs";

function process(text) {
    return text
        .trim()
        .split("\n")
        .map((line) => line.match(/\d+/g).map(Number));
}

function total(sum, [a, b, c]) {
    return sum + (a < b + c && b < a + c && c < a + b);
}

export function part1(text) {
    return process(text).reduce(total, 0);
}

export function part2(text) {
    return zip(...process(text))
        .map((col) => chunk(col, 3).reduce(total, 0))
        .reduce((a, b) => a + b);
}

if (require.main === module) {
    const text = readFileSync("../../data/year2016/day03.txt", "utf8");

    console.log(part1(text));
    console.log(part2(text));
}
