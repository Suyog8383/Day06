function fibonacciSeries(num) {
  let a = 0,
    b = 1;
  let str = "" + a + b;
  for (let i = 1; i <= num - 2; i++) {
    let c = a + b;
    str += c;
    a = b;
    b = c;
  }
  return str;
}
console.log(fibonacciSeries(7));
