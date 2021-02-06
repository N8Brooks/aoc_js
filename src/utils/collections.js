export class Counter {
  constructor(elements) {
    this.counts = new Map();
    for (const key of elements) {
      this.counts.set(key, (this.counts.get(key) ?? 0) + 1);
    }
  }

  mode() {
    let maxKey;
    let maxVal = -Infinity;
    for (const [key, val] of this.counts) {
      if (maxVal < val) {
        maxKey = key;
        maxVal = val;
      }
    }
    return maxKey;
  }

  antimode() {
    let minKey;
    let minVal = Infinity;
    for (const [key, val] of this.counts) {
      if (val < minVal) {
        minKey = key;
        minVal = val;
      }
    }
    return minKey;
  }

  sub(element, n = 1) {
    const count = this.counts.get(element) - n;
    if (0 < count) {
      this.counts.set(element, count);
    } else {
      this.counts.delete(element);
    }
  }

  add(element, n = 1) {
    this.counts.set(element, (this.counts.get(element) ?? 0) + n);
  }
}
