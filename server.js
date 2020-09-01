const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 4000;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/students", (req, res) => {
  const students = [
    { id: 1, firstName: "Rupakshi", lastName: "Aggarwal" },
    { id: 2, firstName: "Captial", lastName: "buttercup" },
    { id: 3, firstName: "Dusty", lastName: "Trail" },
  ];
  res.json(students);
});

app.get("/api/items", (req, res) => {
  const items = [
    { id: 1, columbia: "shirt", size: "10" },
  ];
  res.json(items);
});

app.get("/api/accounts", (req, res) => {
  const accounts = [
    { id: 1, img: "https://d2h1pu99sxkfvn.cloudfront.net/b0/21446986/797901914_4289c440b80b410a8fd702fc81dfc779/P0.jpg", lastName: "admin" },
  ];
  res.json(accounts);
});
