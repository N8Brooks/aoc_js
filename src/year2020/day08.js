export function part1(text) {
  const instruction = process(text);
  const length = instruction.length;
  const seen = new Set();
  let cumulative = 0;
  let i = 0;

  while (i < length) {
    if (seen.has(i)) {
      return cumulative;
    }

    seen.add(i);
    const [op, num] = instruction[i];

    if (op === "acc") {
      cumulative += num;
      i++;
    } else if (op === "jmp") {
      i += num;
    } else {
      i++;
    }
  }
}

export function part2(text) {
  const instruction = process(text);
  const length = instruction.length;
  const seen = new Set();
  let cumulative = 0;
  let swapped = false;
  let result;

  return parse(0), cumulative;

  function parse(i) {
    if (seen.has(i)) {
      return;
    }

    if (i === length) {
      return true;
    }

    seen.add(i);
    const [op, num] = instruction[i];
    result = op === "acc" ? acc(i, num) : op === "jmp" ? jmp(i, num) : nop(i, num);
    seen.delete(i);

    return result;
  }

  function acc(i, num) {
    cumulative += num;
    if (parse(i + 1)) {
      return true;
    }
    cumulative -= num;
  }

  function jmp(i, num) {
    if (parse(i + num)) {
      return true;
    }
    if (!swapped) {
      swapped = true;
      if (parse(i + 1)) {
        return true;
      }
      swapped = false;
    }
  }

  function nop(i, num) {
    if (parse(i + 1)) {
      return true;
    }
    if (!swapped) {
      swapped = true;
      if (parse(i + num)) {
        return true;
      }
      swapped = false;
    }
  }
}

function process(text) {
  return text
    .trim()
    .split("\n")
    .map((line) => line.split(" "))
    .map(([op, num]) => [op, +num]);
}
