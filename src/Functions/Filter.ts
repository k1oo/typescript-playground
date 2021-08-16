function filter<T>(array: Array<T>, fn: Function): Array<T> {
  const result: Array<T> = [];
  for (const value of array) {
    fn(value) && result.push(value);
  }

  return result;
}

filter([1, 2, 3, 4], v => v < 3);