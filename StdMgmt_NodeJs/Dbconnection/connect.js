const mysql2 = require("mysql2");

const stdmgmt = "stddb";

var mysqlconnection = mysql2.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: stdmgmt,
});

 mysqlconnection.connect((err) => {
  if (err) {
    console.log("Connection Failed", JSON.stringify(err, undefined, 2));
  } else {
    console.log("Connection established");
  }
});

module.exports = mysqlconnection;
