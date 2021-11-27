const express = require("express");
const cors = require("cors");
const path = require("path");

const { vacation } = require("./Routers/vacations");
const { users } = require("./Routers/users");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// Step 1:
app.use(express.static(path.resolve(__dirname, "../client/build")));
// Step 2:
app.get("/", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/api/user", users);
app.use("/api/vacation", vacation);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...");
  }
});
app.listen(port, () =>
  console.log(`Example app listening on port port! ${port}`)
);
