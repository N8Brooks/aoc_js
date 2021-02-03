const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const eyeColor = new Set(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]);

export function part1(text) {
  return text.split("\n\n").reduce((sum, batch) => {
    const present = new Set(batch.split(/\s+/).map((field) => field.substr(0, field.indexOf(":"))));
    return sum + required.every((field) => present.has(field));
  }, 0);
}

export function part2(text) {
  return text.split("\n\n").reduce((sum, passport) => {
    const fields = Object.fromEntries(passport.split(/\s+/).map((field) => field.split(":")));
    const { byr = 0, iyr = 0, eyr = 0, hgt = "", hcl, ecl, pid } = fields;

    if (byr < 1920 || 2002 < byr) {
      return sum;
    } else if (iyr < 2010 || 2020 < iyr) {
      return sum;
    } else if (eyr < 2020 || 2030 < eyr) {
      return sum;
    } else if (invalidHeight(hgt)) {
      return sum;
    } else if (!/^#[0-9a-f]{6}$/.test(hcl)) {
      return sum;
    } else if (!eyeColor.has(ecl)) {
      return sum;
    } else if (!/^\d{9}$/.test(pid)) {
      return sum;
    }

    return sum + 1;
  }, 0);

  function invalidHeight(hgt) {
    const magnitude = parseInt(hgt) || 0;

    if (hgt.endsWith("in")) {
      return magnitude < 59 || 76 < magnitude;
    } else if (hgt.endsWith("cm")) {
      return magnitude < 150 || 193 < magnitude;
    }

    return true;
  }
}
