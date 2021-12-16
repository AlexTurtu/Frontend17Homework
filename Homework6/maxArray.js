function maxArray() {
  var max = 0;
  const myArr = [1, 3, 7, 3, 7, 2, 7, 1, 5, 3, 9, 8];
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] > max) {
      max = myArr[i];
    }
  }
  console.log(max);
}
