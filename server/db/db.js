const mysql = require("mysql2/promise");

const sqlSettings = {
  host: "us-cdbr-east-04.cleardb.com",
  port: "3306",
  user: "bb372344ccb5f0",
  password: "4461bb12",
  database: "heroku_9a97d2b4e7c93a2",
  reconnect: true
};


console.log(
  "setting up connection to MySQL with the following settings:",
  sqlSettings
);
const db = mysql.createPool(sqlSettings);

db.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});

db.on('connection', function (connection) {
  console.log('connection made', connection.threadId);
});

db.on('error', function () {
  console.log('Error');
});

db.on('enqueue', function () {
  console.log('Waiting for available connection slot');
});

db.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = {
  db,
};