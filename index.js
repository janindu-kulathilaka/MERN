const express = require("express");
const app = express();
const port = 3000;

const QUESTIONS = [
  {
    title: "Two states",
    description: "Given an array, return the maximum of the array?",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

const SUBMISSION = [
  {
    userId: "1",
    questionId: "1",
    code: "function max(arr) { return Math.max(...arr) }",
    status: "accepted",
  },
  {
    userId: "2",
    questionId: "2",
    code: "function min(arr) { return Math.max(...arr) }",
    status: "rejected",
  },
];

app.post("/signup", function (req, res) {
  //Add logic to decode body
  //body should have email and password

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesn't exit)

  //return back 200 status code to the client

  res.send("Hello World! from signup");
});

app.post("/login", function (req, res) {
  //Add logic to decode body
  //body should have email and password

  // check if the user with the given email exists in the USERS array
  // also ensure that the password is the same

  // if the password is the same, return back 200 status code to the client
  // also send back a token (any random string will do for now)
  // if the password is not the same,  return back 401 status code to the client

  res.send("Hello World! from login");
});

app.get("/questions", function (req, res) {
  //return the user all questions in the QUESTIONS array
  res.send("Hello World! from questions");
});

app.get("/submissions", function (req, res) {
  // return the users submissions for this problem
  res.send("Hello World! from submissions");
});

app.post("/submissions", function (req, res) {
  // let the user submit a problem, randomly accept or reject the solution
  // store the submission in the SUBMISSION array above
  res.send("Hello World! from submissions");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
