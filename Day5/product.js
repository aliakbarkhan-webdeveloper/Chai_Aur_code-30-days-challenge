function product(num1, num2 = 2) {
  if (num1 == null) {
    return num2;
  } else {
    return num1 * num2;
  }
}

console.log(product());
