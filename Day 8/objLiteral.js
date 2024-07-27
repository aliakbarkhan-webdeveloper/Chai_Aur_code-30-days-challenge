//task 8 & 9
let title = "name";
let age = 24;
let obj = {
  age,
  [title]: "ali",
  log() {
    console.log(this.name);
  },
};

console.log(obj);


