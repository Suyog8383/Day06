let arr = [1, 7, 8, 2, 3, 9, 4, 5, 6];
function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
}
console.log(findIndex(arr, 4));
