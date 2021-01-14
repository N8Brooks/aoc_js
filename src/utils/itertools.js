export function* enumerate(it, start = 0) {
  for (let x of it) yield [start++, x];
}

export function* range(start = 0, stop = Infinity, step = 1) {
  while (start < stop) {
    yield start;
    start += step;
  }
}

export function* islice(it, start = 0, stop = Infinity, step = 1) {
  let r = range(start, stop, step);
  let i = r.next().value;
  for (const [n, x] of enumerate(it)) {
    if (n === i) {
      yield x;
      i = r.next().value;
    }
    if (stop <= n) {
      break;
    }
  }
}
