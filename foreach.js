const newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newarr.length);

newarr.forEach((a, i) => {
  console.log(a, i);
});

const n2 = [2, 4, 6, 8, 10];
n2.forEach((a) => {
  console.log(a * 2);
});

// array of objects and foreach.
const student = {
  name: "rohan",
  age: 12,
  class: 5,
  roll: 13,
};

const student2 = {
  name: "rabin",
  age: 16,
  class: 10,
  roll: 1,
};

const student4 = {
  name: "Manan",
  age: 19,
  class: 12,
  roll: 3,
};
// This function shows  objects items in array and their index in an array
const objarr = [student, student2, student4];
 objarr.forEach((a,b) => {
  console.log(a,b)
});

