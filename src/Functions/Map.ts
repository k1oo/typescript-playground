function map<T>(array: Array<T>, fn: Function): Array<T> {
  const result: Array<T> = [];
  for (const value of array) {
    result.push(fn(value));
  }

  return result;
}

map([1, 2, 3, 4], v => v * 2);