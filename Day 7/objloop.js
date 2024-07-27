let obj = {
  title: "Maths",
  author: "Ali Akbar",
  year: "2000",
};
console.log("key : value");
for (const key in obj) {
  console.log(key + ":" + obj[key]);
}
