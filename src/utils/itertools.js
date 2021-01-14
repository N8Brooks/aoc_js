export function* enumerate(elements, start = 0) {
  for (const element of elements) {
    yield [start++, element];
  }
}

export function* range(start = 0, stop = Infinity, step = 1) {
  while (start < stop) {
    yield start;
    start += step;
  }
}

export function* islice(elements, start = 0, stop = Infinity, step = 1) {
  let r = range(start, stop, step);
  let i = r.next().value;
  for (const [n, x] of enumerate(elements)) {
    if (n === i) {
      yield x;
      i = r.next().value;
    }
    if (stop <= n) {
      break;
    }
  }
}

function* generator(elements) {
  for (const element of elements) {
    yield element;
  }
}

export function* windowed(elements, size = 2) {
  const successive = generator(elements);

  const window = [];
  while (window.length < size) {
    window.push(successive.next().value);
  }
  yield window;

  for (const element of successive) {
    window.shift();
    window.push(element);
    yield window;
  }
}
