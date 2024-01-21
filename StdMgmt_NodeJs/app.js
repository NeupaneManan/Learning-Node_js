const express = require("express");
const bodyParser = require("body-parser");
const { createTable } = require("./Dbconnection/create");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/create-table", async (req, res) => {
  try {
    const result = await createTable();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5000, (req, res) => 
console.log("Site is running at port no 5000")
);
