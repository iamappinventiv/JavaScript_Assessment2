function checkArray() {
  let str = "This is a string";
  let arr = [10, 20, 30, 40];

  let ans = str.constucture === Array;
  console.log("Output for String: " + ans);
  ans = arr.constucture ===  Array;
  console.log("Output for Array: " + ans);
}

checkArray();
