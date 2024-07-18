function greet(name, age=18) {
  
  if (typeof name !== typeof "" || name == null) {
    console.log("name should be in string");
  } else {
    console.log(`hello ${name}, how are you?`);
  }
}

greet("ali", 9);
