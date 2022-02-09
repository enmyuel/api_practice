const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const users = [
  { id:1, name:"user1"},
  { id:2, name:"user2"},
  { id:3, name:"user3"}
];

// Simple API
app.get("/Hello", (req, res) => {
  res.send("Hello World!");
})

// request param X, response O
app.get("/api/users", (req, res) => {
  res.json({ok:true, users:users});
})

// Query parameter, request param O, response O
app.get("/api/users/user", (req, res) => {
  const user_id = req.query.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false, users:user});
 })

// path parameter, request param O, response O
app.get("/api/users/:user_id", (req, res) => {
  const user_id = req.params.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false, users:user});
})
module.exports = app;
