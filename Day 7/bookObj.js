//Tasl 1
let bookObj = {
  title: "MySelf",
  author: "Ali",
  year: Date(),
  data: function () {
    let title = this.title;
    let author = this.author;
    return { title, author };
  },
updateYear:function (year) {
    this.year=year;

}
};
console.log(bookObj);

//Task 2

console.log(bookObj.title);
console.log(bookObj.author);

//Task 3:

console.log(bookObj.data());

//Task 4

bookObj.updateYear(1999);
console.log(bookObj);


