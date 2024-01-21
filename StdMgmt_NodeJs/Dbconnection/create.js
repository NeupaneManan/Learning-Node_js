const connect = require("./connect");

const createTable = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullname VARCHAR(255) NOT NULL,
      rollNo INT NOT NULL,
      faculty VARCHAR(255) NOT NULL
    )
  `;

  return new Promise((resolve, reject) => {
    connection.query(createTableQuery, (err, results) => {
      if (err) {
        console.error("Error creating table:", err);
        reject("Internal Server Error");
      } else {
        console.log("Table created successfully");
        resolve("Table Created Sucessfully");
      }
    });
  });
};

module.exports = createTable;
