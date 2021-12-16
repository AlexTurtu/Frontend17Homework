function myPattern() {
  var evenline = "";
  var oddline = "";

  for (var i = 1; i <= 4; i++) {
    if (i % 2 != 0) {
      evenline = evenline + "1 ";
    } else {
      evenline = evenline + "0 ";
    }
  }
  for (var y = 1; y <= 4; y++) {
    if (y % 2 == 0) {
      oddline = oddline + "1 ";
    } else {
      oddline = oddline + "0 ";
    }
  }
  for (var z = 1; z <= 4; z++) {
    if (z % 2 != 0) {
      console.log(oddline + "\n");
    } else {
      console.log(evenline + "\n");
    }
  }
}
