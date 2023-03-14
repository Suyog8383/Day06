let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];
function largestPair(arr) {
  let res = [];
  let max = 0;
  let sorted = arr.sort();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] + sorted[j] > max) {
        max = sorted[i] + sorted[j];
        res = [];
        res.push(sorted[i], sorted[j]);
      }
    }
  }
  return res;
}
console.log(largestPair(arr));
