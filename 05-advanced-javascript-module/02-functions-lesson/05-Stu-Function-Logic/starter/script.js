// Write Your Code Below
function checkParameters(x, y) {
  if (x === y) {
    console.log(
      "Parameter " +
        x +
        " and Parameter " +
        y +
        " have the same value and type " +
        typeof x +
        " " +
        typeof y
    );
  } else if (x == y) {
    console.log(
      "Parameter " +
        x +
        " and Parameter " +
        y +
        " are the same value " +
        typeof x +
        " " +
        typeof y
    );
  } else if (typeof x == typeof y) {
    console.log(
      "Parameter " +
        x +
        " and Parameter " +
        y +
        " are both the same type ",
      + typeof x + " " + typeof y
    );
  } else {
    console.log(
      "Parameter " +
        x +
        " and Parameter " +
        y +
        " are not the same type or value " +
        typeof x +
        " " +
        typeof y
    );
  }
}

checkParameters(3, 3);
checkParameters(3, "3");
checkParameters(3, 4);
checkParameters(true, 3);
