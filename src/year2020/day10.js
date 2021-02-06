export function part1(text) {
  let pre = 0;
  let one = 0;
  let three = 0;

  process(text).forEach(difference), difference(pre + 3);

  return one * three;

  function difference(num) {
    const diff = num - pre;
    if (diff === 1) {
      one++;
    } else if (diff === 3) {
      three++;
    }
    pre = num;
  }
}

export function part2(text) {
  const nums = process(text);
  let window = [[0, 1]];

  nums.forEach(difference), difference(nums[nums.length - 1] + 3);

  return window[window.length - 1][1];

  function difference(num) {
    window = window.filter(([element]) => num - element <= 3);
    window.push([num, window.reduce((sum, [, ways]) => sum + ways, 0)]);
  }
}

function process(text) {
  return text
    .trim()
    .split("\n")
    .map(Number)
    .sort((a, b) => a - b);
}
