const mysql = require("mysql2/promise");

const sqlSettings = {
  host: "us-cdbr-east-04.cleardb.com",
  port: "3306",
  user: "bb372344ccb5f0",
  password: "4461bb12",
  database: "heroku_9a97d2b4e7c93a2",
  reconnect: true
};



const db = mysql.createPool(sqlSettings);



module.exports = {
  db,
};