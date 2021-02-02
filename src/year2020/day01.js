export function part1(text, target = 2020) {
  const nums = text
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const current = nums[i] + nums[j];
    if (current < target) {
      i++;
    } else if (target < current) {
      j--;
    } else {
      return nums[i] * nums[j];
    }
  }

  throw new Error(`No couple of text sums to ${target}`);
}

export function part2(text, target = 2020) {
  const nums = text
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);

  const ones = new Set();
  const twos = new Map();

  for (const a of nums) {
    if (twos.has(2020 - a)) {
      const [b, c] = twos.get(2020 - a);
      return a * b * c;
    }

    ones.forEach((b) => twos.set(a + b, [a, b]));
    ones.add(a);
  }

  throw new Error(`No triple of text sums to ${target}`);
}
