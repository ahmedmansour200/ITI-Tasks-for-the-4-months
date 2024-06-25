
function* fibonacciGenerator(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// test
const num = 10;
const fib = fibonacciGenerator(num);

for (const value of fib) {
  console.log(value);
}

function* fibonacciByMaxValue(max) {
  let a = 0, b = 1;
  while (a <= max) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// example:
const fibGenByMaxValue = fibonacciByMaxValue(100);

for (const num of fibGenByMaxValue) {
  console.log(num);
}
