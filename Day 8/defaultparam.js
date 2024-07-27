function product(a, b = 6) {
  return a * b;
}

let withVal = product(4, 5);
console.log(withVal);

let withoutVal = product(7);
console.log(withoutVal);
