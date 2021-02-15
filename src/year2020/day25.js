const n = 20201227;
const m = Math.ceil(Math.sqrt(n - 1));

export function part1(text) {
  const [ec, ed] = text.trim().split("\n").map(Number);

  return modularPower(ec, babyStepGiantStep(ed), n);
}

function babyStepGiantStep(b) {
  const ajs = new Map();
  for (let j = 0, aj = 1; j < m; j++, aj = (aj * 7) % n) {
    ajs.set(aj, j);
  }

  const c = modularPower(7, m * (n - 2));
  for (let i = 0; i < m; i++) {
    const y = (b * modularPower(c, i, n)) % n;
    if (ajs.has(y)) {
      return i * m + ajs.get(y);
    }
  }

  throw new Error("No solution for discrete logarithm problem");
}

function modularPower(b, e) {
  let x = 1;
  while (e > 0) {
    [b, e, x] = [(b * b) % n, Math.floor(e / 2), e % 2 ? (b * x) % n : x];
  }
  return x;
}
