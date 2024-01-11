const express = require("express");
const { newFunc } = require("./controllers/even");
const { testfunction } = require("./controllers/testcontroller");
const db = require("./model/index");
const app = express();

// const { newFunc } = require("./controllers/even");

db.sequelize.sync({ force: false });

app.get("/", (req, res) => {
  res.json({
    message: "hello world from / route",
  });
});

app.use("/even", newFunc);
app.get("/test", testfunction);

// app.get("/even", newFunc);
let PORT = 4000;

app.listen(PORT, () => {
  console.log(`project started at port ${PORT}`);
});
