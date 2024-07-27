let obj = {
  title: "maths",
  year: "2000",
  str: function () {
    let str = `${this.title} ,${this.year} `;
    return str;
  },
};

console.log(obj.str());
