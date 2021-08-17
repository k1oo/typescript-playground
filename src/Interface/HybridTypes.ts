interface Counter {
  (start: number): string;

  interval: number;

  reset(): void
}

function getCounter(): Counter {
  const counter = (function (start: number) {}) as Counter;
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

const c = getCounter();
c(10);
c.interval = 10;
c.reset();