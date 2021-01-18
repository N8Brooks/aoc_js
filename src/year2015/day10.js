export function lookSay(string) {
  const res = [];
  let length = 0;
  let previous = "";

  for (const char of string) {
    if (previous === char) {
      length += 1;
      continue;
    } else if (previous !== "") {
      res.push(length);
      res.push(previous);
    }
    previous = char;
    length = 1;
  }

  res.push(length);
  res.push(previous);

  return res.join("");
}

export function part1(text, iterations = 40) {
  let string = text.trim();
  for (let i = 0; i < iterations; i++) {
    string = lookSay(string);
  }
  return string.length;
}

export function part2(text, iterations = 50) {
  let string = text.trim();
  for (let i = 0; i < iterations; i++) {
    string = lookSay(string);
  }
  return string.length;
}
