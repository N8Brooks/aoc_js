export function part1(text, index = 2020) {
  return process(text, index);
}

export function part2(text, index = 30000000) {
  return process(text, index);
}

function process(text, index) {
  const ages = Array(index);
  const nums = text.trim().split(",").map(Number);
  nums.forEach((num, i) => void (ages[num] = i + 1));

  let previous = nums[nums.length - 1];
  for (let i, j = nums.length; j < index; j++) {
    i = ages[previous];
    ages[previous] = j;
    previous = i === undefined ? 0 : j - i;
  }

  return previous;
}
