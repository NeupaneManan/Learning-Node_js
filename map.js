//Simple map Example which multiplies every element in an array by 2
const newarr = [1, 3, 5, 6, 7, 8, 9, 99];
let mapdata = newarr.map((item) => {
  return item * 2;
});
console.log(newarr, "This is before mapping");
console.log(mapdata, "This is after mapping");

// finding percentage of every numbers in an array
const newarr1 = [1, 3, 5, 7, 9, 11, 13, 15];
let aftermap = newarr1.map((item) => {
  return (item * newarr1.length) / 100;
});
console.log(aftermap, "This is mapped aray");
console.log(newarr1, "This is unmapped array");

//Creating Objects of Multiple students

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

//mapping the array of object and printing only student name and roll no.
const objarr = [student, student2, student4];
let obj = objarr.map((item) => ({
  name: item.name,
  roll: item.roll,
  age: item.age,
}));
console.log(objarr, "Before mapping");
console.log(obj, "After mapping");

//to return single value from an objects (Only Names are returned)
let obj2 = objarr.map((items) => {
  return items.name;
});
console.log("Before Mapping", objarr);
console.log("After Mapping", obj2);
