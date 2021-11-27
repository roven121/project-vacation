const mysql = require("mysql2/promise");
// mysql://bd102b4303fe9c:27fdf684@eu-cdbr-west-01.cleardb.com/heroku_a3346fc59d98016?reconnect=true
// const sqlSettings = {
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "123123123",
//   database: "vacation",
// };
const sqlSettings = {
  host: "eu-cdbr-west-01.cleardb.com",
  port: "3306",
  user: "bd102b4303fe9c",
  password: "27fdf684",
  database: "heroku_a3346fc59d98016",
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