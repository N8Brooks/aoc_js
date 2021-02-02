export function part1(text, target = 2020) {
  const nums = text
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  while (nums[i] + nums[j] != target) {
    if (nums[i] + nums[j] < target) {
      i++;
    } else {
      j--;
    }
  }

  return nums[i] * nums[j];
}

export function part2(text, target = 2020) {
  const ones = new Set();
  const twos = new Map();

  for (const a of text.trim().split("\n").map(Number).sort()) {
    if (twos.has(2020 - a)) {
      const [b, c] = twos.get(2020 - a);
      return a * b * c;
    }

    ones.forEach((b) => twos.set(a + b, [a, b]));
    ones.add(a);
  }

  throw new Error(`No triple of text sums to ${target}`);
}
