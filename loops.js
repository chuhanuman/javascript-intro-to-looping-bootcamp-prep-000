function forLoop(array) {
  for (let i=0;i<25;i++) {
      array.push(`"I am ${i} strange loop${i===0 ? '' : 's'}."`);
  }
}
function maybeTrue() {
  return Math.random() >= 0.5;
}
function whileLoop(n) {
  while (n>0) {
    console.log(--n);
  }
  return "done";
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (maybeTrue() && array.length > 0);
}
