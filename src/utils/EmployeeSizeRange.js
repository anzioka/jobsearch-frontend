class EmployeeSizeRange {
  constructor(low, high = undefined) {
    this.low = low;
    this.high = high;
  }

  toString() {
    if (this.high === undefined) {
      return `${this.low}+`;
    }
    return `${this.low}-${this.high}`;
  }
}

const sizeRanges = [
  [1, 10],
  [11, 50],
  [51, 200],
  [201, 500],
  [501, 1000],
  [1001, 5000],
  [5000, undefined]
].map((range) => {
  const [low, high] = range;
  return new EmployeeSizeRange(low, high);
});

export default sizeRanges;
