export function part1(text) {
  return totalFuel(text, simpleFuel);
}

export function part2(text) {
  return totalFuel(text, recursiveFuel);

  function recursiveFuel(mass) {
    let sum = 0;
    mass = simpleFuel(mass);
    while (mass > 0) {
      sum += mass;
      mass = simpleFuel(mass);
    }
    return sum;
  }
}

function simpleFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

function totalFuel(text, fuel) {
  return text
    .trim()
    .split("\n")
    .map(Number)
    .reduce((sum, mass) => sum + fuel(mass), 0);
}
