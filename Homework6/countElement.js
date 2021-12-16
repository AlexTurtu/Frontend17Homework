function countElement() {
  var reference = 3;
  const myArr = [1, 2, 9, 3, 5, 3, 6, 1, 65, 9, 0, 3, 5, 1, 3];
  var counter = 0;
  for (var i = 0; i < myArr.length; i++)
    if (myArr[i] == reference) {
      counter++;
    }
  console.log(counter);
}
