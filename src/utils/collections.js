export class Counter {
  constructor(elements) {
    this.counts = new Map();
    for (const key of elements) {
      this.counts.set(key, this.counts.get(key) + 1 || 1);
    }
  }

  mode() {
    let maxKey,
      maxVal = -Infinity;
    for (const [key, val] of this.counts) {
      if (maxVal < val) {
        maxKey = key;
        maxVal = val;
      }
    }
    return maxKey;
  }

  antimode() {
    let minKey,
      minVal = Infinity;
    for (const [key, val] of this.counts) {
      if (val < minVal) {
        minKey = key;
        minVal = val;
      }
    }
    return minKey;
  }
}
