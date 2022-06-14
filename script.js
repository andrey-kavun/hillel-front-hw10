function getFibNumber(n) {
  return n <= 1 ? n : getFibNumber(n - 1) + getFibNumber(n - 2);
}
console.log(getFibNumber(10));