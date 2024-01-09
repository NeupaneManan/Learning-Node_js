var student = {
  name: "John",
  age: 18,
  class: "12th",
  rollNo: "A123",
};

// Iterate over the properties using for...in loop
for (var key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key + ": " + student[key]);
  }
}
