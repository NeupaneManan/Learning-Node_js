const express = require("express");
const evenarr = require("./controllers/even");
const app = express();

// const { newFunc } = require("./controllers/even");

app.get("/", (req, res) => {
  res.json({
    message: "hello world from / route",
  });
});

app.use("/about", evenarr);

// app.get("/even", newFunc);
let PORT = 4000;

app.listen(PORT, () => {
  console.log(`project started at port ${PORT}`);
});
