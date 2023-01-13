const con = require('./config/dbConnection');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routes/index');
const auth = require("./middleware/auth");


const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post("/event", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use('/user', index);

app.use(express.json());

// Logic goes here

module.exports = app;