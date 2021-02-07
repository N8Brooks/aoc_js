export function part1(text) {
  const memory = new Map();
  let zeroMask, onesMask;

  for (const line of text.trim().split("\n")) {
    const [, operator, address, operand] = /(mask|mem)(?:\[(\d+)\])? = (\S+)/.exec(line);
    if (operator === "mask") {
      zeroMask = BigInt(`0b${operand.replaceAll("X", "0")}`);
      onesMask = BigInt(`0b${operand.replaceAll("X", "1")}`);
    } else {
      memory.set(address, (BigInt(operand) | zeroMask) & onesMask);
    }
  }

  return Number(Array.from(memory.values()).reduce((a, b) => a + b));
}

export function part2(text) {
  const fullMask = (1n << 36n) - 1n;
  const memory = new Map();
  let zeroMask, floating, masks;

  for (const line of text.trim().split("\n")) {
    const [, operator, address, operand] = /(mask|mem)(?:\[(\d+)\])? = (\S+)/.exec(line);
    if (operator === "mask") {
      zeroMask = BigInt(`0b${operand.replaceAll("X", "0")}`);
      floating = fullMask;
      masks = [0n];
      operand
        .split("")
        .reverse()
        .map((char, index) => [char, index])
        .filter(([char]) => char === "X")
        .forEach(([, index]) => {
          const bit = 1n << BigInt(index);
          masks.push(...masks.map((mask) => mask | bit));
          floating ^= bit;
        });
    } else {
      const template = (BigInt(address) & floating) | zeroMask;
      const value = +operand;
      masks.forEach((mask) => void memory.set(template | mask, value));
    }
  }

  return Number(Array.from(memory.values()).reduce((a, b) => a + b));
}
