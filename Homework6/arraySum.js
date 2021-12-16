function arraySum() {
  var sum = 0;
  const myArr = [1, 4, 5, 3, 2, 6, 8];
  for (var i = 0; i < myArr.length; i++) {
    sum = sum + myArr[i];
  }
  console.log(sum);
}
