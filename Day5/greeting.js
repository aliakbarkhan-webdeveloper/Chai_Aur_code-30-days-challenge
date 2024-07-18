function greet(name, age) {
  let str = "";
  if (typeof name !== typeof str || name == null) {
    console.log("name should be in string");
  } else if (typeof age !== typeof 0 || age == null) {
    console.log("age should be in number");
  } else {
    console.log(`hello ${name}, how are you?`);
  }
}

greet("ali", 9);
